import Image from "next/image";
import Link from "next/link";
import LongText from "src/components/text/long-text";
import Container from "src/components/container";
import Icons from "src/components/icons";
import { FooterProps } from "src/types";

export default function Footer({ footerData }: { footerData: FooterProps }) {
  const styleBg = footerData.theme === "primary" ? "bg-primary-footer-bg" : "bg-secondary-footer-bg";
  const styleTextPrimary = footerData.theme === "primary" ? "text-primary-footer-text-primary" : "text-secondary-footer-text-primary";
  const styleTextSecondary = footerData.theme === "primary" ? "text-primary-footer-text-secondary" : "text-secondary-footer-text-primary";
  const styleTextHover = footerData.theme === "primary" ? "hover:text-primary-footer-text-hover" : "hover:text-secondary-footer-text-hover";
  const styleIcon = footerData.theme === "primary" ? "#fff" : "#fff";

  return (
    <footer className={`w-full flex flex-col gap-12 lg:gap-20 py-12 ${styleBg}`}>
      <Container classNameOuter="w-full" classNameInner="flex flex-col lg:flex-row" addPaddingX>
        {footerData && footerData.showLogo && (
          <Link href="/">
            <Image src="/logo-white.png" alt="Logo" width={50} height={50} />
          </Link>
        )}
        <ul className="flex flex-col lg:flex-row lg:flex-1  lg:justify-end gap-8 lg:gap-24 mt-12 lg:mt-0">
          {footerData &&
            footerData.links &&
            footerData.links.map((link, index) => {
              if (link.subLinks) {
                return (
                  <li key={index}>
                    <h3 className={`h4 ${styleTextPrimary}`}>{link.title}</h3>
                    <ul className="mt-2 lg:mt-6">
                      {link.subLinks.map((subLink, index) => {
                        return (
                          <li key={index} className="mt-2 first:mt-0">
                            <Link href={subLink.url} className={`body1-bold ${styleTextSecondary} ${styleTextHover}`}>
                              {subLink.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
              if (link.url) {
                return (
                  <li key={index}>
                    <Link href={link.url} className={`h4 ${styleTextPrimary} ${styleTextHover}`}>
                      {link.title}
                    </Link>
                  </li>
                );
              }
            })}
        </ul>
      </Container>
      <Container classNameOuter="w-full" classNameInner="flex flex-col-reverse md:flex-row md:justify-between gap-12" addPaddingX>
        {footerData && footerData.description && (
          <LongText text={footerData.description} textStyle={styleTextPrimary} />
        )}
        {footerData && footerData.socialMediaIcons && (
          <ul className="flex gap-6">
            {footerData.socialMediaIcons.map((i, index) => {
              return (
                <li key={index}>
                  <Link href={i.url}>
                    <Icons name={i.icon} color={styleIcon} size={26}></Icons>
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </Container>
    </footer>
  );
}
