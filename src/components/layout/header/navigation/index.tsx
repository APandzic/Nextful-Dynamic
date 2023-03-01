import Link from "next/link";
import Hamburger from "src/components/button/hamburger";
import HeaderLink from "src/components/layout/header/navigation/desktop-header-link";
import MobileHeaderMenu from "./mobile-header-menu";
import { useHeaderContext } from "src/context";
import { LinksType, LinkType } from "src/types";

interface Props {
  links: LinksType[];
  button?: LinkType;
  isOpen: boolean;
  handleHamburgerClick: () => void;
}

export default function Navigation({ links, button, handleHamburgerClick, isOpen }: Props) {
  const { theme } = useHeaderContext();
  const bgColorHamburger = theme === 'primary' ? `bg-primary-header-hamburger` : `bg-secondary-header-hamburger`;
  const bgColor = theme === 'primary' ? `bg-primary-header-bg-main` : `bg-secondary-header-bg-main`;

  return (
    <>
      <Hamburger className="lg:hidden" isOpen={isOpen} onClick={handleHamburgerClick} bgColor={bgColorHamburger}></Hamburger>
      {/* DESKTOP NAVIGATION */}
      <nav className={`max-lg:hidden h-full pl-32`}>
        <ul className="flex flex-row h-full">
          {links.map((link: LinksType, index: number) => {
            return <HeaderLink key={index} link={link} />;
          })}
        </ul>
        {button && (
          <div className="mt-12">
            <Link href={button.url} className="btn-small">
              {button.title}
            </Link>
          </div>
        )}
      </nav>
      {/* MOBILE NAVIGATION */}
      <nav
        className={`lg:hidden h-screen absolute ease-in-out transition-translate duration-700 top-16 left-0 right-0 bottom-0 ${bgColor} ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <MobileHeaderMenu links={links} handleHamburgerClick={handleHamburgerClick} />
        {button && (
          <div className="mt-12">
            <Link href={button.url} className="btn-small">
              {button.title}
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
