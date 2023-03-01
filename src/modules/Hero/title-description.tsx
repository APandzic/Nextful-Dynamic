import LongText from "src/components/text/long-text";
import Container from "src/components/container";
import { HeroTitleTextProps } from "src/types";

const HeroTitleText = ({ data }: { data: HeroTitleTextProps}) => {
  return (
      <Container
        addPaddingX
        classNameOuter="pt-header-mobile lg:pt-header-desktop"
        classNameInner="py-10 lg:py-16"
      >
        <div className="flex flex-col justify-center items-center gap-6">
          <h3 className="h1 max-w-[800px] pt-12 md:pt-20 text-center">
            {data.title}
          </h3>
          <div className="">
            {data.description && (
              <LongText
                text={data.description}
                className="max-w-[500px] md:max-w-[800px]"
                textStyle="body18 lg:body20 text-center mt-6"
              />
            )}
          </div>
        </div>
      </Container>
  );
};

export default HeroTitleText;
