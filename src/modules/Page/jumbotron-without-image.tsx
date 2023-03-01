import LongText from "src/components/text/long-text";
import Link from "next/link";
import Container from "src/components/container";
import { MdKeyboardArrowRight } from "react-icons/md";
import { ModuleJumbotronWithoutImageProps } from "src/types";

const ModuleJumbotronWithoutImage = ({ data }: { data: ModuleJumbotronWithoutImageProps }) => {
  const styleText = data.theme === "primary" ? `hover:text-primary-text-hover ` : `hover:text-secondary-text-hover`;
  const reverse = data.reverse ? 'md:flex-row-reverse' : 'md:flex-row';

  return (
    <Container
      addPaddingX
      addPaddingY
      classNameInner={`flex flex-col md:flex-row ${reverse} md:gap-20`}
    >
      <div className="w-full md:w-1/2">
        {data.title && <h3 className="h1 md:h2 md:text-center mb-6">{data.title}</h3>}
      </div>
      <div className="w-full md:w-1/2 pt-32px md:py-0">
        {data.description && <LongText text={data.description} textStyle="body16 lg:body18" className="md:pt-4" />}
        {data.button && data.button.url && (
          <Link href={data.button.url} className="">
            <div className={`body16-bold lg:body18-bold mt-6 flex items-center gap-4 hover:gap-6 transition-all ${styleText}`}>
              {data.button.title}
              <div className="mt-0.5">
                <MdKeyboardArrowRight size="20" color={data.iconColor}/>
              </div>
            </div>
          </Link>
        )}
      </div>
    </Container>
  );
};

export default ModuleJumbotronWithoutImage;
