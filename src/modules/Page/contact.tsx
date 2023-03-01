import Image from "next/image";
import Container from "src/components/container";
import LongText from "src/components/text/long-text";
import { ModuleContactProps } from "src/types";

const ModuleContact = ({ data }: {data: ModuleContactProps}) => {
  const bgCard = data.theme === "primary" ? `bg-primary-card-bg` : `bg-secondary-card-bg`;

  return (
    <Container addPaddingX addPaddingY classNameInner="flex flex-col">
      {data.title && <h3 className="h1 text-center mb-10 md:mb-14">{data.title}</h3>}
      <div className="flex flex-row flex-wrap justify-center gap-10 md:gap-16">
        {data.items.map((item, index) => (
          <div key={index} className={`flex flex-col min-h-[14rem] w-[16rem] p-4 rounded-2xl shadow-md ${bgCard}`}>
            {item.icon && (
              <div className="flex justify-start items-center mb-6">
                <Image src={`/icons/${item.icon}.png`} height={40} width={40} alt="icon" />
              </div>
            )}
              {item.title && <h3 className="body18-bold mb-2">{item.title}</h3>}
              {item.description && <LongText textStyle="body18" text={item.description} />}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default ModuleContact;
