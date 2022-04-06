const { CMS_LINK, CMS_LOGIN, CMS_PASSWORD } = process.env;

const auth = {
  username: CMS_LOGIN || "",
  password: CMS_PASSWORD || "",
};

export { CMS_LINK, auth };
