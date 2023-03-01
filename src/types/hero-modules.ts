import { Theme } from "src/types";
import { LinkType } from "./links";
import { ImageType } from "./image";

export interface HeroJumbotronProps {
  moduleType: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageType;
  button?: LinkType;
  theme: Theme;
}

export interface HeroTitleTextProps {
  moduleType: string;
  title: string;
  subtitle: string;
  description: string;
  image: ImageType;
  button?: LinkType;
  theme: Theme;
}
