import { useMemo } from "react";
import type { NextPage } from "next";
import Layout from "src/components/layout";
import { fetchEntries, fetchGraphql } from "src/api/contentful";
import { pagePaths } from "src/api/queries";
import { normalizePage, normalizeHeader, normalizeFooter } from "src/normalize";
import { ParsedUrlQuery } from "querystring";
import { GetStaticProps, GetStaticPaths } from "next";
import { createPageModule, createPageModules } from "src/handler/module-handler";
import { HeaderProps, FooterProps, PageProps } from "src/types";

type Props = {
  pageData: PageProps;
  headerData: HeaderProps;
  footerData: FooterProps;
};

//TODO: Remove any and add types for HeroModule and PageModules
const PageBuilder: NextPage<Props> = ({ pageData, headerData, footerData }) => {
  // Dynamically create the hero module based on the page data from CMS.
  const HeroModule = useMemo(
    () => createPageModule(pageData.heroModule ? pageData.heroModule.moduleType : null),
    [pageData]
  );

  // Dynamically create page modules based on the page data from CMS.
  const pageModules = useMemo(
    () => (pageData.pageModules ? createPageModules(pageData.pageModules) : null),
    [pageData]
  );

  if (pageModules) {
    return (
      <Layout headerData={headerData} title={pageData.title} footerData={footerData}>
        <HeroModule data={pageData.heroModule} />
        {pageModules.map((c: any, index: any) => {
          const PageModule = c.component;
          return <PageModule key={index} data={c.props} />;
        })}
      </Layout>
    );
  }

  return (
    <Layout headerData={headerData} title={pageData.title} footerData={footerData}>
      <HeroModule data={pageData.heroModule} />
    </Layout>
  );
};

export default PageBuilder;

// Get all the paths for the pages created in the CMS. This is needed for getStaticProps to work.
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetchGraphql(pagePaths);

  const paths = response.data.pageTemplateCollection.items.map((item: any) => ({
    params: { pageBuilder: [item.slug] },
  }));

  const subpagePaths = response.data.subpageTemplateCollection.items.map((item: any) => ({
    params: { pageBuilder: [item.parentPage.slug, item.slug] },
  }));

  const allPaths = [...paths, ...subpagePaths];

  return {
    paths: allPaths,
    fallback: false,
  };
};

interface Params extends ParsedUrlQuery {
  pageBuilder: string;
}

// Get the page data from every page path and pass it to the page component.
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { pageBuilder } = params as Params;

  try {
    const responseFooter = await fetchEntries({ content_type: "footer", include: 8 });
    const normalizedFooterData = normalizeFooter(responseFooter[0].fields);

    const responseHeader = await fetchEntries({ content_type: "header", include: 8 });
    const normalizedHeaderData = normalizeHeader(responseHeader[0].fields);

    if (pageBuilder.length === 1) {
      const contentTypeId = "pageTemplate";
      const entries = await fetchEntries({
        content_type: contentTypeId,
        include: 8,
        "fields.slug": pageBuilder[0],
      });

      const normalizedPage = normalizePage(entries[0].fields);

      return {
        props: {
          pageData: normalizedPage,
          headerData: {
            ...normalizedHeaderData,
            theme: normalizedPage.theme,
            iconColor: normalizedPage.iconColor,
          },
          footerData: {
            ...normalizedFooterData,
            theme: normalizedPage.theme,
            iconColor: normalizedPage.iconColor,
          },
        },
      };
    } else if (pageBuilder.length === 2) {
      const contentTypeId = "subpageTemplate";
      const entries = await fetchEntries({
        content_type: contentTypeId,
        include: 8,
        "fields.slug": pageBuilder[1],
      });

      const normalizedPage = normalizePage(entries[0].fields);

      return {
        props: {
          pageData: normalizedPage,
          headerData: {
            ...normalizedHeaderData,
            theme: normalizedPage.theme,
            iconColor: normalizedPage.iconColor,
          },
          footerData: {
            ...normalizedFooterData,
            theme: normalizedPage.theme,
            iconColor: normalizedPage.iconColor,
          },
        },
      };
    }
  } catch (error) {
    console.error(error);
  }

  return {
    notFound: true,
  };
};
