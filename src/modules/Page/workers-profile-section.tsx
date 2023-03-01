import Image from "next/image";
import Container from "src/components/container";
import LongText from "src/components/text/long-text";
import HeaderModules from "src/components/ui/header.modules";
import { ModuleWorkersProfileSectionProps } from "src/types";

const ModuleWorkersProfileSection = ({ data }: {data: ModuleWorkersProfileSectionProps}) => {
  const bgCard = data.theme === "primary" ? `bg-primary-card-bg` : `bg-secondary-card-bg`;
  const onlyOneItem = data.items && data.items.length === 1;
  return (
    <Container addPaddingX classNameInner={`flex flex-col ${onlyOneItem ? 'max-w-[624px]' : 'max-w-[1024px]'}  py-6 lg:py-12`}>
      <HeaderModules title={data.title} description={data.description} />
      <div className={`grid grid-cols-1 ${onlyOneItem ? 'md:grid-cols-1' : 'md:grid-cols-2'} gap-8 md:gap-16`}>
        {data.items.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col min-h-[14rem] w-full p-4 rounded-2xl shadow-elevation-light  ${bgCard}`}
          >
            {item.image && (
              <div className="relative w-full aspect-square flex justify-start items-center mb-6">
                <Image fill src={item.image.src} alt="icon"  className="object-cover"/>
              </div>
            )}
            {item.title && <h4 className="body20-bold mb-1">{item.title}</h4>}
            {item.description && <LongText textStyle="body18" text={item.description} />}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ModuleWorkersProfileSection;
