import { instance } from "../instance";

export const showCase = async (type?: PathOptions): Promise<ArticleGroups> => {
  const res = await instance.get(`/article-groups?populate=*`);

  let data: ArticleGroups = res.data;

  return data;
};
