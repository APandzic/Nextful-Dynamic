import { normalizePageModule } from "./page-module";
import { normalizeHeroModule } from "./hero-module";
import { Page } from "src/types/contentful";

export const normalizePage = (page: Page) => {
  const { pageContentModule, heroModule } = page;
  // TODO: This is a temporary solution. We should have a better way to handle this.
  const iconColor = page.theme === "primary" ? "#000" : "#000";

  const normalizedPage = {
    title: page.title,
    slug: page.slug,
    parentPage: page.parentPage
      ? { slug: page.parentPage.fields.slug, title: page.parentPage.fields.title }
      : null,
    pageModules: pageContentModule
      ? pageContentModule
          .filter((item: any) => item.hasOwnProperty("fields"))
          .map((item: any) => {
            return normalizePageModule(
              item,
              page.theme,
              iconColor,
              `Page module "${item.sys.contentType.sys.id}" on page "${page.slug}"`
            );
          })
      : null,
    heroModule: heroModule.hasOwnProperty("fields")
      ? normalizeHeroModule(heroModule, page.theme, iconColor, `Hero module on page "${page.slug}"`)
      : null,
    theme: page.theme,
    iconColor,
  };

  return normalizedPage;
};
