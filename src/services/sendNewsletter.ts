import axios from "axios";
import { SendNewsletterType } from "../types";
import { auth, CMS_LINK } from "./auth";

type NewsletterBodyType = {
  email: string;
};

const endpoint = `${CMS_LINK}/newsletter`;

export const sendNewsletter = async (
  body: NewsletterBodyType
): Promise<SendNewsletterType> => {
  return await axios
    .post(endpoint, body, { auth })
    .then((res) => res)
    .catch((err) => err);
};
