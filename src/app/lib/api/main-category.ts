import { instance } from "../instance";

export const fetchMainCategories = async (
  type?: PathOptions
): Promise<MainCategories> => {
  const res = await instance.get(`/main-categories?populate=*`);

  let data: MainCategories = res.data;

  return data;
};
