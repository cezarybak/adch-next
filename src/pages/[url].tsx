import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import SEO from "../components/SEO";
import { getData } from "../services";
import { GetPagesType, GetPageType } from "../types";

type SeoType = {
  title: string;
  metaContent: string;
};

type Props = {
  pagesData: GetPagesType;
  currentPageData: GetPageType;
};

const MainPage = ({ pagesData, currentPageData }: Props) => {
  const router = useRouter();

  const seoMap: Record<string, SeoType> = {
    "/": { title: "Home", metaContent: "Home page content - breally page" },
    "/about": {
      title: "About",
      metaContent: "About page content - breally page",
    },
    "/solutions": {
      title: "Solutions",
      metaContent: "Solutions page content - breally page",
    },
  };

  const { metaContent, title } = seoMap[router.asPath];

  return (
    <>
      <Navbar pagesData={pagesData} />
      <SEO title={`Breally | ${title}`} metaContent={metaContent} />
      <main></main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const pagesData = await getData<GetPagesType>({ type: "pages" });
  const findPage = pagesData.find(
    (e) => e.url.replace("/", "") === context?.params?.url
  );

  const currentPageData = await getData<GetPageType>({
    type: "page",
    slug: findPage?.id,
  });

  return {
    props: {
      pagesData,
      currentPageData,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const pagesData = await getData<GetPagesType>({ type: "pages" });

  const mapPaths = pagesData.map((e) => {
    return {
      params: { url: e.url.replace("/", ""), id: e.id },
    };
  });

  return {
    paths: mapPaths,
    fallback: false,
  };
};

export default MainPage;
