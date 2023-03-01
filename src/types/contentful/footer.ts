import { SysType } from "./sys";
import { RootMenuLinks, RootLinkReference } from "./link";

export interface RootFooter {
  sys: SysType;
  fields: Footer;
}

export interface Footer {
  footer: string;
  showLogo: boolean;
  description?: string;
  links: RootMenuLinks[];
  socialMediaIcons?: {
    sys: SysType;
    fields: {
      icon: string;
      link: RootLinkReference;
    };
  }[];
}
