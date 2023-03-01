import type { NextPage } from "next";
import { createPageModule, createPageModules } from "src/handler/module-handler";
import { fetchEntries } from "src/api/contentful";
import { normalizePage, normalizeHeader, normalizeFooter } from "src/normalize";
import { useMemo } from "react";
import Layout from "src/components/layout";
import { HeaderProps, FooterProps, PageProps } from "src/types";

type Props = {
  pageData: PageProps;
  headerData: HeaderProps;
  footerData: FooterProps;
};

//TODO: Remove any and add types for HeroModule and PageModules
const Home: NextPage<Props> = ({ pageData, headerData, footerData }) => {
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

export default Home;

// Get the landing page data from CMS and pass normalized data to the page component as props.
export async function getStaticProps() {
  try {
    //Fetch data for the homepage. Include represents the number of levels (nested data) to include in the response.
    const entries = await fetchEntries({ content_type: "homepage", include: 8 });

    //Normalize the page data from CMS.
    const normalizedPage = normalizePage(entries[0].fields);

    //Fetch data for the footer. Include represents the number of levels (nested data) to include in the response.
    const responseFooter = await fetchEntries({ content_type: "footer", include: 8 });

    //Normalize the footer data from CMS.
    const normalizedFooterData = normalizeFooter(responseFooter[0].fields);

    //Fetch data for the header. Include represents the number of levels (nested data) to include in the response.
    const responseHeader = await fetchEntries({ content_type: "header", include: 8 });

    //Normalize the header data from CMS.
    const normalizedHeaderData = normalizeHeader(responseHeader[0].fields);

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
  } catch (error) {

    // If an error during build occurs on the landing page, throw the error
    throw error;
  }
}
