import { Theme } from "./theme";
// import { HeroJumbotronProps, HeroTitleTextProps } from "./hero-modules";
// import {
//   ModuleJumbotronProps,
//   ModuleJumbotronWithoutImageProps,
//   ModuleTitleTextProps,
//   ModuleThreeColumnTextBlocksProps,
//   ModuleTwoColumnTextBlocksProps,
//   ModuleContactProps,
//   ModuleWorkersProfileSectionProps,
//   ModuleContactFormProps,
// } from "./page-modules";

//TODO: Fix this type and use it in the page create page components function
// type HeroModuleType = HeroJumbotronProps | HeroTitleTextProps;
// type PageModuleType = Array<
//   | ModuleJumbotronProps
//   | ModuleJumbotronWithoutImageProps
//   | ModuleTitleTextProps
//   | ModuleThreeColumnTextBlocksProps
//   | ModuleTwoColumnTextBlocksProps
//   | ModuleContactProps
//   | ModuleWorkersProfileSectionProps
//   | ModuleContactFormProps
// >;

export interface PageProps {
  page: string;
  title: string;
  slug: string;
  heroModule: any;
  pageModules: any;
  theme: Theme;
}
