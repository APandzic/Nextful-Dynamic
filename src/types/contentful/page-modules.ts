import { Image } from "./image";
import { RootLink } from "./link";
import { SysType } from "./sys";

export interface RootPageModuleJumbotron {
  sys: SysType;
  fields: PageModuleJumbotron;
}
export interface PageModuleJumbotron {
  title: string;
  description: string;
  button: RootLink;
  image: Image;
}

export interface RootPageModuleJumbotronWithoutImage {
  sys: SysType;
  fields: PageModuleJumbotronWithoutImage;
}

export interface PageModuleJumbotronWithoutImage {
  title: string;
  description: string;
  button: RootLink;
}

export interface RootPageModuleTitleText {
  sys: SysType;
  fields: PageModuleTitleText;
}

export interface PageModuleTitleText {
  title: string;
  description: string;
}

export interface RootPageModuleThreeColumnTextBlocks {
  sys: SysType;
  fields: PageModuleThreeColumnTextBlocks;
}

export interface PageModuleThreeColumnTextBlocks {
  moduleName: string;
  items: {
    sys: SysType;
    fields: {
      title: string;
      description: string;
    };
  }[];
}

export interface RootPageModuleTwoColumnTextBlocks {
  sys: SysType;
  fields: PageModuleTwoColumnTextBlocks;
}

export interface PageModuleTwoColumnTextBlocks {
  moduleName: string;
  items: {
    sys: SysType;
    fields: {
      tag: string;
      title: string;
      description: string;
    };
  }[];
}

export interface RootPageModuleContact {
  sys: SysType;
  fields: PageModuleContact;
}

export interface PageModuleContact {
  title: string;
  items: {
    sys: SysType;
    fields: {
      icon: string;
      title: string;
      description: string;
    };
  }[];
}

export interface RootPageModuleWorkersProfileSection {
  sys: SysType;
  fields: PageModuleWorkersProfileSection;
}

export interface PageModuleWorkersProfileSection {
  title: string;
  description: string;
  items: {
    sys: SysType;
    fields: {
      image: Image;
      title: string;
      description: string;
    };
  }[];
}

export interface RootPageModuleContactForm {
  sys: SysType;
  fields: PageModuleContactForm;
}

export interface PageModuleContactForm {
  successMessage: string;
  errorMessage: string;
}
