import Link from "next/link";
import { useEffect, useRef } from "react";
import { useHeaderContext } from "src/context";
import useHover from "src/hooks/useHover";
import { LinksType } from "src/types";

export default function HeaderLink({ link }: { link: LinksType }) {
  const { setSubnavigationLinks, theme } = useHeaderContext();
  const styleBgHover = theme === 'primary' ? `hover:bg-primary-header-bg-hover` : `hover:bg-secondary-header-bg-hover`;
  const hoverRef = useRef(null);
  const isHover = useHover(hoverRef);

  useEffect(() => {
    if (isHover) {
      if (link.subLinks && link.subLinks.length > 0) {
        setSubnavigationLinks(link.subLinks);
      } else {
        setSubnavigationLinks(null);
      }
    }
  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHover]);

  if (link.subLinks) {
    return (
      <li className="h-full" ref={hoverRef}>
        <a className={`h4 h-full flex items-center px-4 ${styleBgHover}`}>{link.title}</a>
      </li>
    );
  }

  if (link.url) {
    return (
      <li className="h-full" ref={hoverRef}>
        <Link
          href={link.url}
          className={`h4 h-full flex items-center px-4 ${styleBgHover}`}
        >
          {link.title}
        </Link>
      </li>
    );
  }

  return null;
}
