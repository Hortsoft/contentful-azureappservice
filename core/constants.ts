
import { PageType, RobotsContent, MetaTags } from '../interfaces/tags';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: MetaTags = {
  canonical: 'https://www.hortsoft.co.nz',
  description: 'Pushing you to the edge of   innovation',
  image: 'https://www.techhive.io/image.png',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'hortsoft.',
  type: PageType.website
};