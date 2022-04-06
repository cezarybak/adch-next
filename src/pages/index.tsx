import { GetStaticProps } from "next";
import { getData } from "../services";
import { GetPagesType, GetPageType } from "../types";
import Home from "./[url]";

export const getStaticProps: GetStaticProps = async () => {
  const pagesData = await getData<GetPagesType>({ type: "pages" });
  const findPage = pagesData.find((e) => e.url === "/");

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

export default Home;
