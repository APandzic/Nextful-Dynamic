import Header from "./header";
import Footer from "./footer";
import Head from "next/head";
import { HeaderProvider } from "src/context";
import { FooterProps, HeaderProps } from "src/types";

interface Props {
  children: React.ReactNode;
  headerData: HeaderProps;
  footerData: FooterProps;
  title: string;
}

export default function Layout(props: Props) {
  const theme = props.headerData.theme === 'primary' ? `theme-primary` : `theme-secondary`;

  return (
    <>
      <Head>
        <title>{props.title}</title>
      </Head>
      <div className={`relative min-h-screen flex flex-col ${theme}`}>
        <HeaderProvider theme={props.headerData.theme}>
          <Header headerData={props.headerData}/>
        </HeaderProvider>
        <main className="flex flex-col flex-grow">{props.children}</main>
        <Footer footerData={props.footerData} />
      </div>
    </>
  );
}
