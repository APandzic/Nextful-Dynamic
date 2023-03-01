import { SysType } from "./sys";

export interface RootLink {
  sys: SysType;
  fields: Link;
}

export interface Link {
  title: string;
  link: LinkReference;
}

export interface RootLinkReference {
  sys: SysType;
  fields: LinkReference;
}

export interface LinkReference {
  title: string;
  slug?: string;
  url?: string;
  parentPage?: RootParentPageLink;
}

export interface RootParentPageLink {
  sys: SysType;
  fields: ParentPageLink;
}

export interface ParentPageLink {
  title: string;
  slug: string;
}

export interface RootMenuLinks {
  sys: SysType;
  fields: MenuLink;
}

export interface MenuLink {
  title: string;
  link?: RootLinkReference;
  links?: RootMenuLinks[];
}
