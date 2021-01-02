import { Images } from './image';

export interface Items {
  external_urls: object;
  genres: string[];
  href: string;
  id: string;
  images: Array<Images>;
  name: string;
  type: string;
  uri: string;
  album: {
    release_date: string;
    images: Array<Images>;
  };
}
