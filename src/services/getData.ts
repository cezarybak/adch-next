import axios from "axios";
import { auth, CMS_LINK } from "./auth";

type GetDataType = {
  type: "pages" | "page";
  slug?: string;
};

export const getData = async <T>({ type, slug }: GetDataType): Promise<T> => {
  const endpointMap = {
    page: `${CMS_LINK}/${type}/${slug}`,
    pages: `${CMS_LINK}/${type}`,
  };

  return await axios
    .get(endpointMap[type], { auth })
    .then((res) => res.data)
    .catch((err) => err);
};
