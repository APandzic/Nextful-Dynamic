import { SysType } from "./sys";
import { RootLink } from "./link";
import { Image } from "./image";

export interface RootHeroModuleJumbotron {
  sys: SysType;
  fields: HeroModuleJumbotron;
}

export interface HeroModuleJumbotron {
  subtitle: string;
  title: string;
  description: string;
  button: RootLink;
  image: Image;
}

export interface RootHeroModuleTitleText {
  sys: SysType;
  fields: HeroModuleTitleText;
}

export interface HeroModuleTitleText {
  title: string;
  description: string;
}
