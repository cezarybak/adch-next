import Head from "next/head";

type Props = {
  title: string;
  metaContent: string;
};

export const SEO = ({ title, metaContent }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
      />
      <meta name="description" content={metaContent} />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#ffffff" />
      <link type="image/svg" rel="icon" href="/favicon.svg" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  );
};
