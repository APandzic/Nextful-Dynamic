import { Theme } from "./theme";
import { LinkType, LinksType } from "./links";

export interface HeaderProps {
  header: string;
  showLogo: boolean;
  links: LinksType[];
  button?: LinkType;
  iconColor: string;
  theme: Theme;
}
