import Container from "src/components/container";
import { inDevEnvironment } from "src/utils/inDevEnvironment";

const ModuleNotFound = () => {

  // In development, show a message that the module could not be found.
  if (inDevEnvironment) {
    return (
      <Container addPaddingX classNameOuter="pt-header-mobile lg:pt-header-desktop">
        This module could not be found.
      </Container>
    );
  }
  return null;
};

export default ModuleNotFound;
