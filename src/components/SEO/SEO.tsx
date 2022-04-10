import Head from "next/head";

type Props = {
  title: string;
  metaContent: string;
};

export const SEO = ({ title, metaContent }: Props) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={metaContent} />
      <meta property="og:type" content="website" />
    </Head>
  );
};
