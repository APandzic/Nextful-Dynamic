import { checkAndFilterFields } from "./utils";
import { normalizeLink } from "./link";
import { normalizeImage } from "./image";
import { RootHeroModuleJumbotron, RootHeroModuleTitleText } from "src/types/contentful";

type HeroModule = RootHeroModuleJumbotron | RootHeroModuleTitleText;

// This function is used to normalize the hero module. It checks if the module has a image field and if it does, normalize it. Not every hero module has a image.
export const normalizeHeroModule = (
  module: HeroModule,
  theme: string,
  iconColor: string,
  errorMessage: string
) => {
  // This function is used to check if the module has the required fields and if it does, return them. If not, don't pass the field.
  const fields = checkAndFilterFields(module.fields, errorMessage);

  // Check if the module has a image field and if it does, normalize it. Not every hero module has a image.
  if (fields.image) {
    fields.image = normalizeImage(fields.image);
  }

  // Check if the module has a image field and if it does, normalize it. Not every module has a image.
  if (fields.button) {
    fields.button = normalizeLink(fields.button.fields.title, fields.button.fields.link);
  }

  return {
    ...fields,
    moduleType: module.sys.contentType.sys.id,
    theme: theme,
    iconColor: iconColor,
  };
};
