type Props = {
  isOpen: boolean;
  onClick?: React.MouseEventHandler;
  className?: string;
  bgColor: string;
};

export default function Hamburger({ isOpen, onClick, className, bgColor }: Props) {
  return (
    <button
      className={`w-12 h-12 relative focus:outline-none flex justify-center items-center ${
        className ? className : ""
      }`}
      onClick={onClick}
    >
      <span
        className={`block absolute h-[3px] w-7 transform transition duration-500 ease-in-out ${bgColor} ${
          isOpen ? "rotate-45" : "-translate-y-2"
        }`}
      ></span>
      <span
        className={`block absolute  h-[3px] w-7 transform transition duration-500 ease-in-out ${bgColor} ${
          isOpen ? "opacity-0" : ""
        }`}
      ></span>
      <span
        className={`block absolute  h-[3px] w-7 transform transition duration-500 ease-in-out ${bgColor} ${
          isOpen ? "-rotate-45" : "translate-y-2"
        }`}
      ></span>
    </button>
  );
}
