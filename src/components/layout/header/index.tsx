import { useEffect, useState, useRef } from "react";
import { useHeaderContext } from "src/context";
import Container from "src/components/container";
import DesktopSubnavigation from "src/components/layout/header/navigation/desktop-subnavigation";
import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import useHover from "src/hooks/useHover";
import useLockedBody from "src/hooks/useLockedBody";
import useScrollPosition from "src/hooks/useScrollPosition";
import { HeaderProps } from "src/types";

interface Props {
  headerData: HeaderProps;
}

export default function Header({ headerData }: Props) {
  const { setSubnavigationLinks, theme, subnavigationLinks } = useHeaderContext();
  // TODO: ADD a variable for this
  const [showHeader, setShowHeader] = useState(true);
  const scrollPosition = useScrollPosition(); // TODO: ADD a variable for this
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [locked, setLocked] = useLockedBody(false);
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);
  const showBorder = scrollPosition > 300;
  const showBg = scrollPosition > 50;

  const styleBorder = theme === 'primary' ? `border-primary-header-border` : `border-secondary-header-border`;
  const styleText = theme === 'primary' ? `text-primary-header-text` : `text-secondary-header-text`;

  const styleBg = theme === 'primary' ? `bg-primary-header-bg-main lg:bg-primary-header-bg-top` : `bg-secondary-header-bg-bg-main lg:bg-secondary-header-bg-top`;
  const styleBgAfterScroll = theme === 'primary' ? `bg-primary-header-bg-main` : ` bg-secondary-header-bg-bg-main`;

  const bgStyle = showBg ? styleBgAfterScroll : subnavigationLinks ? styleBgAfterScroll : styleBg;


  const handleHamburgerClick = () => {
    setIsOpen(!isOpen);
    setLocked(!locked);
  };

  useEffect(() => {
    if (scrollPosition > 300 && subnavigationLinks === null) {
      const visible = prevScrollPosition > scrollPosition;
      if (showHeader !== visible) {
        setShowHeader(visible);
      }
    }
    setPrevScrollPosition(scrollPosition);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [scrollPosition]);

  const handleLogoClick = () => {
    setIsOpen(false);
    setLocked(false);
  };

  useEffect(() => {
    if (!isHover) {
      setSubnavigationLinks(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover]);

  return (
    <header
      className={`fixed z-50 w-full  ease-in-out transition-all duration-200 ${styleText} ${bgStyle}
      ${showHeader ? "translate-y-0" : "-translate-y-full"}`
    }
      ref={hoverRef}
    >
      <Container
        classNameOuter={`h-header-mobile lg:h-header-desktop border-b transition-border ${showBorder && !subnavigationLinks ? `${styleBorder} delay-300` : "border-transparent-full"}`}
        classNameInner="h-full lg:pr-10 flex items-center justify-between lg:justify-start"
        addPaddingX
      >
        <Link href="/" onClick={handleLogoClick} className="lg:absolute my-auto">
          <Image src="/logo-black.png" alt="Logo" width={50} height={50} />
        </Link>
        <Navigation
          links={headerData.links}
          button={headerData.button}
          handleHamburgerClick={handleHamburgerClick}
          isOpen={isOpen}
        />
      </Container>
      <DesktopSubnavigation />
    </header>
  );
}
