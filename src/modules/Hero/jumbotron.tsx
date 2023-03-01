import Image from "next/image";
import Link from "next/link";
import Container from "src/components/container";
import LongText from "src/components/text/long-text";
import { HeroJumbotronProps } from "src/types";

const HeroJumbotron = ({ data }: {data: HeroJumbotronProps}) => {
  const styleBtn = data.theme === "primary" ? "btn-large-primary" : "btn-large-secondary";
  return (
    <Container
      addPaddingX
      classNameOuter="pt-header-mobile lg:pt-header-desktop"
      classNameInner="py-10 lg:py-16"
    >
      <div className="flex justify-center items-center flex-col-reverse md:flex-row md:gap-8">
        <div className="w-full md:w-1/2 pt-32px md:py-0">
          {data.subtitle && (
            <div className="text-center md:text-start mb-1 pl-1">
              <span className="body3-bold">{data.subtitle}</span>
            </div>
          )}
          <h1 className="h1 text-center md:text-start">{data.title}</h1>
          <LongText
            text={data.description}
            textStyle="body18 lg:body20 text-center md:text-left mt-6"
          />
          {data.button && data.button.url && (
            <div className="pt-8 flex justify-center md:justify-start">
              <Link className={styleBtn} href={data.button.url}>
                {data.button.title}
              </Link>
            </div>
          )}
        </div>
        <div className="w-full md:w-1/2 block mb-6 md:mb-0">
          {data.image && data.image.src && (
            <Image src={data.image.src} alt={data.title} width={800} height={800} />
          )}
        </div>
      </div>
    </Container>
  );
};

export default HeroJumbotron;
