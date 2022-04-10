export type SectionTypes = "hero" | "testimonial" | "newsletter";

export type SectionObjectType = {
  type: SectionTypes;
  text?: string;
  author?: string;
  img?: string;
};

type Navigation = {
  url: string;
  id: string;
};

export type GetPagesType = Navigation[];

export type GetPageType = {
  url: string;
  id: string;
  sections: SectionObjectType[];
};
