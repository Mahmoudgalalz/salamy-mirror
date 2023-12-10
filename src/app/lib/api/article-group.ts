import { instance } from "../instance";

export const showCase = async (type?: PathOptions): Promise<ShowCase> => {
  const res = await instance.get(
    `/article-groups?fields[0]=name&fields[1]=category&fields[2]=slug&populate[0]=main_category&populate[1]=Cover`
  );

  let data = res.data;

  return data;
};
