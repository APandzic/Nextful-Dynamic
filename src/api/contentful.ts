const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: "master",
});

interface IEntries {
  include: number;
  "sys.id"?: string;
  content_type?: string;
  "fields.slug"?: string;
}

export const fetchEntries = async (obj: IEntries) => {
  try {
    const entries = await client.getEntries(obj);
    if (entries.items) {
      return entries.items;
    }
  } catch (error) {
    throw new Error("Error fetching entries");
  }
};

export const fetchEntry = async (id: string) => {
  try {
    const entry = await client.getEntry(id);
    if (entry) {
      return entry;
    }
  } catch (error) {
    throw new Error("Error fetching entry");
  }
};

const endpoint = `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`;

export const fetchGraphql = async (query: string) => {
  const options = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: query }),
  };

  try {
    const response = await fetch(endpoint, options);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error fetching graphql");
  }
};
