import { SysType } from "./sys";
import { RootMenuLinks } from "./link";

export interface RootHeader {
  sys: SysType;
  fields: Header;
}
export interface Header {
  header: string;
  showLogo: boolean;
  links: RootMenuLinks[];
}
