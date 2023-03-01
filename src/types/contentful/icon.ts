import { SysType } from "./sys";
import { RootLinkReference } from "./link";

export interface RootIcon {
  sys: SysType;
  fields: Icon;
}

export interface Icon {
  icon: string;
  link: RootLinkReference;
}
