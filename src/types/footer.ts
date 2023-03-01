import { Theme } from "./theme";
import { LinksType } from "./links";

export interface FooterProps {
  description: string;
  showLogo: boolean;
  links: LinksType[];
  socialMediaIcons: { icon: string; url: string }[];
  theme: Theme;
  iconColor: string;
}
