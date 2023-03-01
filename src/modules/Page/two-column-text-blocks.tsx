import React from "react";
import Container from "src/components/container/";
import Text from "src/components/text/long-text";
import { ModuleTwoColumnTextBlocksProps } from "src/types";

const ModuleTwoColumnTextBlock = ({ data }: { data: ModuleTwoColumnTextBlocksProps}) => {
  return (
    <Container
      addPaddingX
      addPaddingY
      classNameInner="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
    >
      {data.items.map((block: any, index: number) => {
        const { tag, title, description } = block;
        return (
          <div key={index} className="w-full">
            {tag && (
              <div className="mb-1.5 md:mb-2">
                <span className="body14-bold">{tag}</span>
              </div>
            )}
            {title && <h3 className="h4 lg:h3 mb-1.5 md:mb-2 lg:w-[80%]">{title}</h3>}
            {description && <Text textStyle="body16 lg:body18" text={description} />}
          </div>
        );
      })}
    </Container>
  );
}

export default ModuleTwoColumnTextBlock;
