import { normalizeLinks } from "./link";
import { Header } from "src/types/contentful";

export const normalizeHeader = (header: Header) => {
  const normalizedHeader = {
    showLogo: header.showLogo,
    links: header.links ? normalizeLinks(header.links) : null,
  };
  return normalizedHeader;
};
