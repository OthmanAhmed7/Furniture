import { createClient } from "@sanity/client";

const clientConfig = {
  projectId: "3guzg45j",
  dataset: "production",
  apiVersion: "v1",
  useCdn: false,
};

export const client = createClient(clientConfig);

export const fetchData = async () => {
  try {
    const products = await client.fetch('*[_type == "product"]');
    return products;
  } catch (error) {
    console.error("Sanity fetch error:", error);
    throw new Error("Failed to fetch data from Sanity");
  }
};
