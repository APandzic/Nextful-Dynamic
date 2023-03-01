import React from "react";

interface Props {
  classNameOuter?: string;
  classNameInner?: string;
  addPaddingX?: boolean;
  addPaddingY?: boolean;
  children: React.ReactNode;
}

const Container = (props: Props) => {
  return (
    <div className={`container-outer ${props.classNameOuter ? props.classNameOuter : ''}`}>
      <div className={`container-inner ${props.classNameInner ? props.classNameInner : ''} ${props.addPaddingX ? 'px-4 md:px-12 lg:px-16' : ''} ${props.addPaddingY ? 'py-12 lg:py-20' : ''}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
