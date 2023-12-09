import { instance } from "../instance";

export const showCase = async (type?: PathOptions): Promise<showCase> => {
  const res = await instance.get(`/article-groups?fields[0]=name&fields[1]=id`);

  let data = res.data;

  return data;
};
