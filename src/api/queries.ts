import { gql } from "graphql-request";

export const pagePaths = gql`
  query pageTemplateCollectionQuery {
    pageTemplateCollection {
      items {
        sys {
          id
        }
        title
        slug
      }
    }
    subpageTemplateCollection {
      items {
        sys {
          id
        }
        title
        slug
        parentPage {
          title
          slug
        }
      }
    }
  }
`;
