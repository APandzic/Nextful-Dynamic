export interface Image {
  sys: {
    environment: {
      sys: {
        id: string;
        type: string;
        linkType: string;
      };
    };
  };
  fields: {
    title?: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}
