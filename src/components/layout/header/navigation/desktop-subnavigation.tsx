import Link from "next/link";
import Container from "src/components/container";
import { useHeaderContext } from "src/context";
import { LinkType } from "src/types";

export default function DesktopSubnavigation() {
  const { subnavigationLinks, theme } = useHeaderContext();
  const styleBgHover = theme === 'primary' ? `hover:bg-primary-header-bg-hover` : `hover:bg-secondary-header-bg-hover`;
  const styleBorder = theme === 'primary' ? `border-primary-header-border` : `border-secondary-header-border`;

  return (
    <Container
      addPaddingX
      classNameOuter={`w-screen overflow-hidden transition-all duration-500  ${
        subnavigationLinks ? `h-header-desktop-submenu border-b ${styleBorder} opacity-100` : "h-0 opacity-0 "
      }`}
      classNameInner="w-full h-full"
    >
      <ul className={`flex flex-col flex-wrap pl-36 pb-10 pt-7 h-header-desktop-submenu`}>
        {subnavigationLinks?.map((link: LinkType, index: number) => (
          <li key={index} className="mt-3">
            <Link
              href={link.url}
              className={`text-center h5 flex items-center ${styleBgHover}`}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
