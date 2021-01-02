import { Images } from './image';

export interface Users {
  country: string;
  display_name: string;
  email: string;
  id: string;
  uri: string;
  images: Array<Images>;
}
