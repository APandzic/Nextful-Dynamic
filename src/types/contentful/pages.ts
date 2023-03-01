import { RootHeroModuleJumbotron, RootHeroModuleTitleText } from "./hero-modules";
import {
  RootPageModuleContact,
  RootPageModuleContactForm,
  RootPageModuleJumbotron,
  RootPageModuleJumbotronWithoutImage,
  RootPageModuleThreeColumnTextBlocks,
  RootPageModuleTitleText,
  RootPageModuleTwoColumnTextBlocks,
  RootPageModuleWorkersProfileSection,
} from "./page-modules";
import { SysType } from "./sys";
import { Theme } from "src/types";

export interface RootPage {
  sys: SysType;
  fields: Page;
}
export interface Page {
  page: string;
  title: string;
  slug: string;
  parentPage?: RootPage;
  heroModule: RootHeroModuleJumbotron | RootHeroModuleTitleText;
  pageContentModule: Array<
    | RootPageModuleJumbotron
    | RootPageModuleJumbotronWithoutImage
    | RootPageModuleTitleText
    | RootPageModuleThreeColumnTextBlocks
    | RootPageModuleTwoColumnTextBlocks
    | RootPageModuleContact
    | RootPageModuleWorkersProfileSection
    | RootPageModuleContactForm
  >;
  theme: Theme;
}
