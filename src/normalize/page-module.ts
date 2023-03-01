import { checkAndFilterFields } from "./utils";
import { normalizeImage } from "./image";
import { normalizeLink } from "./link";
import {
  RootPageModuleContact,
  RootPageModuleJumbotron,
  RootPageModuleJumbotronWithoutImage,
  RootPageModuleTitleText,
  RootPageModuleThreeColumnTextBlocks,
  RootPageModuleTwoColumnTextBlocks,
  RootPageModuleWorkersProfileSection,
  RootPageModuleContactForm,
} from "src/types/contentful";

type PageModuleType =
  | RootPageModuleJumbotron
  | RootPageModuleJumbotronWithoutImage
  | RootPageModuleTitleText
  | RootPageModuleThreeColumnTextBlocks
  | RootPageModuleTwoColumnTextBlocks
  | RootPageModuleContact
  | RootPageModuleWorkersProfileSection
  | RootPageModuleContactForm;

export const normalizePageModule = (
  module: PageModuleType,
  theme: string,
  iconColor: string,
  errorMessage: string
) => {
  // This function is used to check if the module has the required fields and if it does, return them. If not, don't pass the field.
  const fields = checkAndFilterFields(module.fields, errorMessage);
  const moduleType = module.sys.contentType.sys.id;

  // Checks if fields that is required for the module is present. If not, the module will be removed.
  // We conduct this check to prevent potential breaking changes that may occur if a component is removed or unpublished in Contentful, and it is referenced in other modules, components, or pages. .
  let removePageModule: boolean = false;
  switch (moduleType) {
    case "pageModuleWorkersProfileSection":
      if (fields.items && fields.items.length > 0) {
        fields.items = fields.items.map((i: any, index: number) => {
          const { image, ...rest } = i;
          if (!image) {
            removePageModule = true;
            return null;
          }

          return {
            ...rest,
            image: normalizeImage(image),
          };
        });
      }

      break;
    case "pageModuleThreeColumnTextBlocks":
      if (!fields.items || fields.items.length === 0) {
        removePageModule = true;
      }

      break;
    case "pageModuleTwoColumnTextBlocks":
      if (!fields.items || fields.items.length === 0) {
        removePageModule = true;
      }

      break;
    case "pageModuleJumbotron":
      if (!fields.image) {
        removePageModule = true;

        break;
      }
      if (fields.button) {
        fields.button = normalizeLink(fields.button.fields.title, fields.button.fields.link);
      }

      if (fields.image) {
        fields.image = normalizeImage(fields.image);
      }

      break;
    case "pageModuleJumbotronWithoutImage":
      if (fields.button) {
        fields.button = normalizeLink(fields.button.fields.title, fields.button.fields.link);
      }

      break;
    case "pageModuleContact":
      if (!fields.items || fields.items.length === 0) {
        removePageModule = true;
      }

      break;
    default:
      break;
  }

  if (removePageModule) {
    return null;
  }

  return {
    ...fields,
    moduleType: moduleType,
    theme: theme,
    iconColor: iconColor,
  };
};
