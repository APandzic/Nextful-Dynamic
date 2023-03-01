import { normalizeLinks } from "./link";
import { normalizeSocialMediaIcons } from "./icon";
import { Footer } from "src/types/contentful";

export const normalizeFooter = (footer: Footer) => {
  const normalizedFooter = {
    showLogo: footer.showLogo, // required
    description: footer.description ? footer.description : null,
    links: footer.links ? normalizeLinks(footer.links) : null,
    socialMediaIcons: footer.socialMediaIcons
      ? normalizeSocialMediaIcons(footer.socialMediaIcons)
      : null,
  };

  return normalizedFooter;
};
