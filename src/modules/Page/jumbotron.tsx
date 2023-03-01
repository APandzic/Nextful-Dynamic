import Image from "next/image";
import Link from "next/link";
import Container from "src/components/container";
import LongText from "src/components/text/long-text";
import { ModuleJumbotronProps } from "src/types";

const ModuleJumbotron = ({ data }: { data: ModuleJumbotronProps}) => {
  const styleBtn = data.theme === "primary" ? "btn-large-primary" : "btn-large-secondary";
  const reverse = data.reverse ? "md:flex-row-reverse" : "md:flex-row";
  return (
    <Container
      addPaddingX
      addPaddingY
      classNameInner={`flex justify-center items-center flex-col-reverse ${reverse} md:gap-20`}
    >
        <div className="w-full md:w-1/2 pt-32px md:py-0">
          {data.subtitle && (
            <div className="text-center md:text-start mb-1 pl-1">
              <span className="body3-bold">{data.subtitle}</span>
            </div>
          )}
          <h3 className="h3 md:h2 text-center md:text-start">{data.title}</h3>
          <LongText text={data.description} textStyle="body16 lg:body18 text-center md:text-left mt-6" />
          {data.button && data.button.url && (
            <div className="pt-8 flex justify-center md:justify-start">
              <Link
                className={styleBtn}
                href={data.button.url}
              >
                {data.button.title}
              </Link>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 block mb-6 md:mb-0">
          {data.image && <Image src={data.image.src} alt={data.title} width={800} height={800} />}
        </div>
    </Container>
  );
};

export default ModuleJumbotron;
