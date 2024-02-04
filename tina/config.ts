import { defineConfig } from "tinacms";
import DEGig from "./collections/de-gig";
import DEKisanii from "./collections/de-kisanii";
import ENKisanii from "./collections/en-kisanii";
import ENGig from "./collections/en-gig";
import DESinglePage from "./collections/de-single";
import ENSinglePage from "./collections/en-single";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [DEKisanii, DEGig, DESinglePage, ENKisanii, ENGig, ENSinglePage],
  },
});
