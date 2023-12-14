import { instance } from "../instance";

export const fetchMainCategory = async (
  mainCategorySlug: string
): Promise<MainCategory> => {
  const res = await instance.get(
    `main-categories?populate=*&filters[slug][$eq]=${mainCategorySlug}`
  );

  let data: MainCategory = res.data;

  return data;
};
