import Container from "src/components/container";
import LongText from "src/components/text/long-text";
import { ModuleTitleTextProps } from "src/types";

const ModuleTitleText = ({ data }: { data: ModuleTitleTextProps}) => {
  return (
    <Container addPaddingX addPaddingY classNameInner="flex flex-col justify-center items-center">
      {data.title && <h3 className="h1 text-center mb-6 md:mb-8">{data.title}</h3>}
      {data.description && (
        <LongText
          className="max-w-[500px] md:max-w-[800px]"
          textStyle="body16 lg:body18 text-center"
          text={data.description}
        ></LongText>
      )}
    </Container>
  );
};

export default ModuleTitleText;
