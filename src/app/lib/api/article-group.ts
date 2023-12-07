import { instance } from "../instance";

export interface ArticleGroups {
  data: Data[];
}

export interface Data {
  id: number;
  attributes: Attributes;
}

export interface Attributes {
  Name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
}

export const showCase = async (type?: PathOptions): Promise<ArticleGroups> => {
  const res = await instance.get(`/main-categories?populate=*`);

  let data = res.data;

  return data.data[0].attributes.article_groups;
};
