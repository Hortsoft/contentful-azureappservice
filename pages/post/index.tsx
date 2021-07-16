import { NextPage } from 'next';
import React from 'react';
import ReactMarkdown from 'react-markdown';


import { ContentfulService } from '../../core/contentful';
import { Navbar } from '../../shared/components/navbar';
import Layout from '../../shared/components/layout/layout.component';
import { MetaTags, PageType, RobotsContent } from "../../interfaces/tags";
import { BlogPost } from '../../interfaces/post';
import Card from "../../shared/components/card";
import { Footer } from '../../shared/components/footer';

type Props = {
    article: BlogPost;
    suggestedArticles: BlogPost[];
  };
  
  const renderCards = (suggestions) =>
    suggestions.map((suggestion, index) => (
      <Card key={index} info={suggestion} />
    ));
  const PostPage: NextPage<Props, any> = (props: Props) => {
    const postMetaTags: MetaTags = {
      canonical: `${process.env.DOMAIN_PUBLIC}`,
      description: `${props.article.description}`,
      // contentful does not set the http or https before an image link, so we need to add it ourselves
      image: `https:${props.article.heroImage.url}`,
      robots: `${RobotsContent.follow},${RobotsContent.index}`,
      title: `${props.article.title}`,
      type: PageType.article
    };
  
    return (
      <Layout metaTags={postMetaTags}>
        <Navbar />
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full px-2 md:w-7/12">
              <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
                <h3 className="text-4xl font-normal leading-normal mt-0 mb-2 text-blueGray-800">
                  {props.article.title}
                </h3>
                <p className="text-base font-light leading-relaxed mt-0 mb-4 text-blueGray-800">
                  {props.article.body}
                </p>
                <footer className="block text-blueGray-600">
                  Written by {props.article.author.name}
                </footer>
              </span>
            </div>
            <div className="w-1/2 px-2 md:w-5/12">
              <span className="text-sm block my-2 p-1 text-blueGray-700 rounded border border-solid border-blueGray-100">
                {renderCards(props.suggestedArticles)}
              </span>
            </div>
          </div>
        </div>

        <Footer />
      </Layout>
    );
  };
  
  PostPage.getInitialProps = async ({ query }) => {
    const contentfulService = new ContentfulService();
  
    const { post } = query;
    const article = await contentfulService.getPostBySlug(post);
  
    const tags = article.tags ? article.tags.map((tag) => tag.sys.id) : [];
  
    const suggestedArticles = await contentfulService.fetchSuggestions(
      tags,
      article.slug
    );
  
    return { article, suggestedArticles };
  };
  
  export default PostPage;