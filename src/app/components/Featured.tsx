"use client";

import { useEffect, useState } from "react";
import { FeaturedArticles } from "./Article/FeaturedArticles";
import ArticleShowCase from "./Article/article-showcase";
import { showCase } from "../lib/api/article-group";

export default function Featured() {
  const [data, setData] = useState<ShowCase>();

  useEffect(() => {
    async function fetchShowCase() {
      try {
        const res = await showCase();
        if (res) setData(res);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchShowCase();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center gap-10 py-36 bg-[#FFEEDD] justify-center">
        <h1 className="text-5xl font-bold text-[##333D42] text-center w-[56rem] leading-relaxed">
          نساعدك في علاج مشكلتك النفسية والوصول إلى السلام النفسي
        </h1>
        <p className="text-3xl font-light">اختر موضوعاً ترغب في استكشافه</p>
        <ArticleShowCase data={data} />
      </div>

      <FeaturedArticles data={data} />
    </>
  );
}
