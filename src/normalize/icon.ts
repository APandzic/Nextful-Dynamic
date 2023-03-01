import { RootIcon } from "src/types/contentful";

export const normalizeSocialMediaIcons = (icons: RootIcon[]) => {
  const normalizedIcons = icons.map((item: RootIcon) => {
    return {
      icon: item.fields.icon,
      url: item.fields?.link.fields?.url ? item.fields.link.fields.url : null,
    };
  });
  return normalizedIcons;
};
