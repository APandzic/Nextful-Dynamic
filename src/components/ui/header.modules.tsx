import Text from "src/components/text/long-text";

interface Props {
  title?: string;
  description?: string;
  marginBottom?: boolean;
}

const HeaderModules = ({ title, description, marginBottom = true }: Props) => {
  if (title || description) {
    return (
      <div className={`w-full mx-auto  max-w-[600px] md:max-w-[968px] ${marginBottom ? 'mb-10 md:mb-16' : '' }`}>
        {title && <h3 className="h1 text-center mb-6 md:mb-8">{title}</h3>}
        {description && (
          <Text
            className="max-w-[500px] md:max-w-[800px] mx-auto"
            textStyle="body16 lg:body18 text-center"
            text={description}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default HeaderModules;
