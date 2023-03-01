import { RootLink, RootLinkReference, RootMenuLinks, MenuLink } from "src/types/contentful";
import util from "util";

export const normalizeLinkRestfulData = (link: RootLinkReference) => {
  if (
    link &&
    link.sys &&
    link.sys.contentType &&
    link.sys.contentType.sys &&
    link.sys.contentType.sys.id
  ) {
    if (link.sys.contentType.sys.id === "pageTemplate") {
      return `/${link.fields.slug}`;
    }
    if (link.sys.contentType.sys.id === "subpageTemplate" && link.fields.parentPage) {
      return `/${link.fields.parentPage.fields.slug}/${link.fields.slug}`;
    }
    if (link.sys.contentType.sys.id === "linkExternal") {
      return link.fields.url;
    }
    if (link.sys.contentType.sys.id === "homepage") {
      return `${link.fields.slug}`;
    }
  }
  return null;
};

export const normalizeLinks = (links: RootMenuLinks[]) => {
  const normalizedLinks = links.map((item: RootMenuLinks) => {
    // If the item is a link group
    if (item.fields && item.fields.links) {
      return {
        title: item.fields.title, // Menu group title
        subLinks: item.fields.links.map((subLink) => {
          return {
            title: subLink.fields.title,
            url: subLink.fields.link ? normalizeLinkRestfulData(subLink.fields.link) : null,
          };
        }),
      };
    }

    // If the item is a single link
    if (item.fields && item.fields.link) {
      return normalizeLink(item.fields.title, item.fields.link);
    }

    // if the item is missing
    return null;
  });

  return normalizedLinks;
};

export const normalizeLink = (title: string, link: RootLinkReference) => {
  return {
    title: title,
    url: normalizeLinkRestfulData(link),
  };
};
