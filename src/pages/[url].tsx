import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import SEO from "../components/SEO";
import Testimonials from "../components/Testimonials";
import { getData } from "../services";
import { GetPagesType, GetPageType, SectionTypes } from "../types";

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

  const findSection = (searchElement: SectionTypes) =>
    currentPageData.sections.find((e) => e?.type === searchElement);

  return (
    <>
      <Navbar pagesData={pagesData} />
      <SEO title={`Breally | ${title}`} metaContent={metaContent} />
      <main className="w-full h-full">
        {findSection("hero") && <Hero heroData={findSection("hero")!} />}
        {findSection("testimonial") && (
          <Testimonials testimonialsData={findSection("testimonial")!} />
        )}
        {findSection("newsletter") && <Newsletter />}
      </main>
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

  const mapPaths = pagesData
    .map((e) => {
      return {
        params: { url: e.url.replace("/", ""), id: e.id },
      };
    })
    .filter((e) => e.params.url);

  return {
    paths: mapPaths,
    fallback: false,
  };
};

export default MainPage;
