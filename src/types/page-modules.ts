import { Theme } from "./theme";
import { LinkType } from "./links";
import { ImageType } from "./image";

export interface ModuleJumbotronProps {
  moduleType: string;
  title: string;
  subtitle: string;
  description: any;
  image: ImageType;
  button?: LinkType;
  reverse: boolean;
  theme: Theme;
}

export interface ModuleJumbotronWithoutImageProps {
  moduleType: string;
  title: string;
  description: any;
  button?: LinkType;
  reverse: boolean;
  theme: Theme;
  iconColor: string;
}

export interface ModuleTitleTextProps {
  moduleType: string;
  title: string;
  description: string;
}

export interface ModuleThreeColumnTextBlocksProps {
  moduleType: string;
  items: {
    tag?: string;
    title?: string;
    description?: string;
  }[];
}

export interface ModuleTwoColumnTextBlocksProps {
  moduleType: string;
  items: {
    tag?: string;
    title?: string;
    description?: string;
  }[];
}

export interface ModuleContactProps {
  moduleType: string;
  theme: Theme;
  title?: string;
  items: {
    icon: string;
    title?: string;
    description?: string;
  }[];
}

export interface ModuleWorkersProfileSectionProps {
  moduleType: string;
  theme: Theme;
  title?: string;
  description?: string;
  items: {
    image: ImageType;
    title: string;
    description: string;
  }[];
}

export interface ModuleContactFormProps {
  moduleType: string;
  title?: string;
  description?: string;
  errorMessage: string;
  successMessage: string;
  theme: Theme;
}
