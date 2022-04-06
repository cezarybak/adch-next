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
      <link rel="icon" href="/favicon.svg" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  );
};
