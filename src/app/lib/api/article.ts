import { instance } from "../instance";

export const fetchArticleGroup = async (articleGroupId: number) => {
  const res = await instance.get(
    `/article-groups/${articleGroupId}?populate=*`
  );

  let data = res.data;

  return data;
};
