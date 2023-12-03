import { instance } from "../instance"

export const showCase = async (type?:PathOptions): Promise<ShowCase[]> =>{
    let path;
    const res = await instance.get(`/main-categories?populate=*`)
    const rootPath = res.data.slug;
    const category = res.data.categories
}