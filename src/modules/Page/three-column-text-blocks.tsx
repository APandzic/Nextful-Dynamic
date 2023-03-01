import React from "react";
import Container from "src/components/container/";
import Text from "src/components/text/long-text";
import { ModuleThreeColumnTextBlocksProps } from "src/types";

const ModuleThreeColumnTextBlock = ({ data }: { data: ModuleThreeColumnTextBlocksProps}) => {
  return (
    <Container addPaddingX addPaddingY classNameInner="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
      {data.items.map((block: any, index: number) => {
        const { tag, title, description } = block;
        return (
          <div key={index}>
            {tag && (
              <div className="mb-1.5 md:mb-2">
                <span className="body14-bold">{tag}</span>
              </div>
            )}
            {title && <h3 className="h4 lg:h3 mb-1.5 md:mb-2">{title}</h3>}
            {description && <Text textStyle="body16 lg:body18" text={description} />}
          </div>
        );
      })}
    </Container>
  );
}

export default ModuleThreeColumnTextBlock;
