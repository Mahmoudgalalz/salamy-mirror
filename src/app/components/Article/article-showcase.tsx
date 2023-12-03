'use client'
import { getPath } from "@/app/lib/api/article";
import { useEffect, useState } from "react";
import ArrowLink from "../arrow-link";

export default function ArticleShowCase(){
    const [data,setData] = useState(null)

    useEffect(()=>{
        async function getData() {
            const res = await getPath();
            console.log(res)
            if(res) setData(res)
        } getData()
    },[])

    return (
        <ArrowLink path="/s" name="Test" />
    )
}