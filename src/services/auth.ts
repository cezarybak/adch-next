const auth = {
  username: process.env.CMS_LOGIN || "",
  password: process.env.CMS_PASSWORD || "",
};

const CMS_LINK = process.env.CMS_LINK;

export { CMS_LINK, auth };
