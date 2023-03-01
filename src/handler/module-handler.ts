import dynamic from "next/dynamic";
import inBrowser from "src/utils/in-browser";

const ModuleList = {
  heroJumbotron: dynamic(() => import("src/modules/Hero/jumbotron")),
  heroTitleText: dynamic(() => import("src/modules/Hero/title-description")),
  pageModuleContact: dynamic(() => import("src/modules/Page/contact")),
  pageModuleTitleText: dynamic(() => import("src/modules/Page/title-text")),
  pageModuleJumbotron: dynamic(() => import("src/modules/Page/jumbotron")),
  pageModuleContactForm: dynamic(() => import("src/modules/Page/contact-form")),
  pageModuleJumbotronWithoutImage: dynamic(
    () => import("src/modules/Page/jumbotron-without-image")
  ),
  pageModuleThreeColumnTextBlocks: dynamic(
    () => import("src/modules/Page/three-column-text-blocks")
  ),
  pageModuleTwoColumnTextBlocks: dynamic(() => import("src/modules/Page/two-column-text-blocks")),
  pageModuleWorkersProfileSection: dynamic(
    () => import("src/modules/Page/workers-profile-section")
  ),
  moduleNotFound: dynamic(() => import("src/modules/NotFound")),
  heroAndPageDummyModule: dynamic(() => import("src/modules/NotFound")),
};

export const createPageModule = (moduleName: string | undefined) => {
  const Module = ModuleList[moduleName as keyof typeof ModuleList];

  if (!inBrowser) {
    if (typeof Module === "undefined") {
      // The server should always render the module so we get the static HTML.
      return ModuleList["moduleNotFound" as keyof typeof ModuleList];
    }
    return Module;
  }

  if (typeof Module === "undefined") {
    return ModuleList["moduleNotFound" as keyof typeof ModuleList];
  }

  return Module;
};

// TODO: Remove any and add correct types.
// TODO: Remove filter away null and undefined. This is a temporary fix. We should render the moduleNotFound component instead in development mode and hide in production.
export const createPageModules = (modulesData: any) => {
  return modulesData
    .filter((c: any) => c !== null && c !== undefined)
    .map((c: any) => {
      return { component: createPageModule(c.moduleType), props: c };
    });
};
