import { instance } from "../instance";

export const fetchArticleGroup = async (
  articleGroupSlug: string
): Promise<ArticleGroup> => {
  const res = await instance.get(
    `article-groups?filters[slug][$eq]=${articleGroupSlug}&populate=*`
  );

  let data: ArticleGroup = res.data;

  return data;
};
