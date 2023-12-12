import { instance } from "../instance";

export const fetchMainCategories = async (
  type?: PathOptions
): Promise<MainCategory> => {
  const res = await instance.get(`/main-categories?populate=*`);

  let data: MainCategory = res.data;

  return data;
};
