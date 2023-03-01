import { Image } from "src/types/contentful";

export const normalizeImage = (image: Image) => {
  return image
    ? {
        src: `https:${image.fields.file.url}`,
        alt: image.fields.description || "image",
        width: image.fields.file.details.image.width,
        height: image.fields.file.details.image.height,
      }
    : null;
};
