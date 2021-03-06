const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    CMS_LOGIN: process.env.CMS_LOGIN,
    CMS_PASSWORD: process.env.CMS_PASSWORD,
    CMS_LINK: process.env.CMS_LINK,
  },
  images: {
    domains: ["i.ibb.co"],
  },
};

module.exports = nextConfig;
