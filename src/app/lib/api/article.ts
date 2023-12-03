import { instance } from "../instance"

export const showCase = async (type?:PathOptions): Promise<any> =>{
    let data;
    //TODO: need to optimize the populate parm to get the exect data needed
    const res = await instance.get(`/article-groups?populate=*`)
    // res.data.map(data=>{

    // })
    const rootPath = res.data.slug;
    const category = res.data.categories
    return res
}