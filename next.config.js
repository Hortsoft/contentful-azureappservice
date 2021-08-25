//const withCSS = require('@zeit/next-css');
const path = require('path');
const Dotenv = require('dotenv-webpack');
const { generateAllArticles } = require('./utils/helpers');

const next_config = {
  images: {
    domains: ['https://contentful-webapp.azurewebsites.net', 'http://localhost:3000/'],
    loader: 'imgix',
    path: '',
  },
  webpack: config => {
    config.plugins = config.plugins || [];

    config.plugins = [
      ...config.plugins,
      // Read the .env file
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true
      })
    ];
   
    return config;
  },

  // New exportPathMap function added
  // This will allow us to export all available blog posts when building and exporting our website
  exportPathMap: async () => {
    const articles = await generateAllArticles();

    const insights = articles.reduce(
      (pages, entry) =>
        Object.assign({}, pages, {
          [`/post/${entry.slug}`]: {
            page: '/post',
            query: { post: entry.slug }
          }
        }),
      {}
    );

    const pages = {
      '/': { page: '/' },
      '/post': { page: '/post' }
    };

    return Object.assign({}, pages, insights);
  }
};

module.exports = { ...next_config };