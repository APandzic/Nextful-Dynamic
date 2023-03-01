import { useState } from "react";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";
import { LinksType } from "src/types";

interface Props {
  links: LinksType[];
  handleHamburgerClick: () => void;
}

export default function MobileHeaderMenu({ links, handleHamburgerClick }: Props) {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const handleIsOpen = (index: number) => {
    if (isOpen === index) {
      setIsOpen(null);
    } else {
      setIsOpen(index);
    }
  };
  return (
    <ul className="h-full py-6">
      {links.map((link: any, index: number) => {
        if (link.subLinks) {
          return (
            <div key={index}>
              <li
                className="text-lg md:text-2xl font-semibold flex px-4 py-2 cursor-pointer "
                onClick={() => handleIsOpen(index)}
              >
                <a className="w-full flex items-center justify-between">
                  {link.title}
                  <span>
                    <MdArrowForwardIos
                      className={`mr-6px ${isOpen === index ? "rotate-90" : ""}`}
                    />
                  </span>
                </a>
              </li>
              {isOpen === index && link.subLinks && (
                <ul className="pl-4">
                  {link.subLinks.map((link: any, index: number) => {
                    return (
                      <li key={index} className="text-lg md:text-2xl font-semibold flex px-4 py-2">
                        <Link href={link.url} className="w-full" onClick={handleHamburgerClick}>
                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          );
        }
        return (
          <li key={index} onClick={handleHamburgerClick}>
            <Link href={link.url} className="text-lg md:text-2xl font-semibold flex px-4 py-2">
              {link.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
