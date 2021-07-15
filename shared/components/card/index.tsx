import React, { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getHref, getNavigationLink } from '../../helpers/helper';

import styles from './card.module.scss';

type Props = {
  info: {
    id: string;
    title: string;
    description: string;
    heroImage: string;
    publishedAt: Date;
    slug: string;
  };
};
import img from '/public/images/drawers.jpg';

const Card: FunctionComponent<Props> = ({ info }) => {
  const cardBGStyles = {
    backgroundImage: `/url(${info.heroImage})`,
    background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`
  };



  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
      <div className="rounded-tr-md rounded-tl-md h-48 w-full">
        <Image
          src={img}
          alt=""
          layout="responsive"
          loading="lazy"
          height="300px"
        />
        </div>
        <header className="flex items-center justify-between leading-tight p-2 md:p-4">
          <h1 className="text-lg">
            <a className="no-underline hover:underline text-black" href="#">
              {info.title}
            </a>
          </h1>
        </header>
        <div className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">
          {info.description}{" "}
        </div>
        <footer className="flex items-center justify-between leading-none p-2 md:p-4">
          <Link href={getHref()} as={getNavigationLink(info.slug)}>
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Explore
            </a>
          </Link>
        </footer>
      </article>
    </div>
  );
};

export default Card;