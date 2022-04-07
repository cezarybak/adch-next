import axios from "axios";
import { SendNewsletterType } from "../types";
import { auth, CMS_LINK } from "./auth";

type NewsletterBodyType = {
  email: string;
};

const endpoint = `${CMS_LINK}/newsletter`;

export const sendNewsletter = (body: NewsletterBodyType) => {
  return axios.post(endpoint, body, { auth });
};
