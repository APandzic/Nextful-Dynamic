import Container from "src/components/container";
import ContactForm from "src/components/form/contact";
import HeaderModules from "src/components/ui/header.modules";
import { ModuleContactFormProps } from "src/types";

const ModuleContactForm = ({ data }: {data: ModuleContactFormProps}) => {
  return (
    <Container addPaddingX addPaddingY>
      <HeaderModules title={data.title} description={data.description} />
      <ContactForm
        errorMessage={data.errorMessage}
        successMessage={data.successMessage}
        theme={data.theme}
        className="rounded-2xl max-w-2xl mx-auto"
      />
    </Container>
  );
};

export default ModuleContactForm;
