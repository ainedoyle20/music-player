import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "kpnkoejq",
  dataset: "production",
  apiVersion: "2023-01-31",
  token: import.meta.env.VITE_SANITY_TOKEN,
  useCdn: false,
});

export default client;
