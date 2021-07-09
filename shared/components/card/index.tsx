import React, { FunctionComponent } from 'react';
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

const Card: FunctionComponent<Props> = ({ info }) => {
  const cardBGStyles = {
    backgroundImage: `url(${info.heroImage})`,
    background: `linear-gradient(45deg, rgba(18, 40, 76, 0.56), rgba(39, 173, 213, 0.56), rgba(79, 192, 176, 0.56)), url(${info.heroImage}) no-repeat`
  };

  return (
    <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    <div className={styles.card}>
      <div className={styles.card__header} style={cardBGStyles} />
      <div className={styles.card__body}>
        <h3 className={styles.card__title}>{info.title}</h3>
        <p className={styles.card__text}>{info.description}</p>
      </div>

      <div className={styles.card__footer}>
        <Link href={getHref()} as={getNavigationLink(info.slug)}>
          <a className={styles.card__action}>Explore</a>
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Card;