type Maybe<T> = T | undefined;

type HeroType = {
  type: string;
  text: string;
  imag: string;
};

type TestimonialType = {
  type: string;
  text: string;
  author: string;
};

type NewsletterType = {
  type: string;
};

type Navigation = {
  url: string;
  id: string;
};

export type GetPagesType = Navigation[];

export type GetPageType = {
  url: string;
  id: string;
  sections: (HeroType | Maybe<TestimonialType> | Maybe<NewsletterType>)[];
};
// {
//   "url": "/",
//   "id": "MPz3uDxgKR",
//   "sections": [
//       {
//           "type": "hero",
//           "text": "Excepteur sint occaecat cupidatat non proident sunt.",
//           "img": "https://i.ibb.co/G9bfTPH/breally-img.png"
//       },
//       {
//           "type": "testimonial",
//           "text": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
//           "author": "Jim Beam, American Bourbon"
//       },
//       {
//           "type": "newsletter"
//       }
//   ]
// }

// {
//   "url": "/solutions",
//   "id": "BsX5PfVVxl",
//   "sections": [
//       {
//           "type": "hero",
//           "text": "Check out the solutions.",
//           "img": "https://i.ibb.co/G9bfTPH/breally-img.png"
//       },
//       {
//           "type": "testimonial",
//           "text": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
//           "author": "Peam Pim, The Actor"
//       }
//   ]
// }

// {
//   "url": "/about",
//   "id": "RsQPoaZWdp",
//   "sections": [
//       {
//           "type": "testimonial",
//           "text": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
//           "author": "Luke Book, The Cook"
//       }
//   ]
// }
