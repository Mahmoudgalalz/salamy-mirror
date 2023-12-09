"use client";

import { useEffect, useState } from "react";
import FeaturedCategorie from "../Category/FeaturedCategory";
import MiniFeaturedArticle from "./MiniFeaturedArticle";
import { fetchMainCategories } from "@/app/lib/api/main-category";
import clsx from "clsx";

export function FeaturedArticles() {
  const [featArticles, setArticles] = useState([]);
  const [featSubCategory, setCategories] = useState<ArticleGroups>();
  const [featMainCategories, setMainCategories] =
    useState<MainCategoriesData[]>();
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchMainCategories();
        if (res) return res;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    getData().then((res) => {});
  }, []);
  return (
    <div className="flex flex-col items-start gap-7 py-36 bg-[#F8F7FF] justify-center mx-10">
      <h4 className="text-black/50 text-xl">المقالات المميزة</h4>
      <h2 className="text-5xl font-bold">مقتطفات من مقالاتنا المميزة</h2>
      <div className="w-full rounded-2xl flex my-14">
        <img
          src={
            featMainCategories
              ? `http://128.199.48.214:1337${featMainCategories[0]?.attributes.Header.data.attributes.formats.small.url}`
              : "feat-article.png"
          }
          loading="lazy"
          alt="article"
          className="w-1/2 h-full bg-clip-border rounded-s-xl"
        />
        <div className="bg-[#FCD961] flex flex-col gap-7 w-1/2 rounded-e-xl justify-center px-10">
          <span className="flex flex-col gap-2">
            <h5 className="text-content1">
              {featMainCategories
                ? featMainCategories[0]?.attributes.Name
                : "الصحة النفسية"}
            </h5>
            <h2 className="text-3xl text-[#232426] font-medium">
              ما هي الصحة النفسية؟
            </h2>
          </span>
          <p className="text-[#656667] leading-loose">
            الصحة النفسية هي حالة من الرفاه النفسي تمكّن الشخص من مواجهة ضغوط
            الحياة، وتحقيق إمكاناته، والتعلّم والعمل بشكل جيد، والمساهمة في
            مجتمعه المحلي. وهي جزء لا يتجزأ من الصحة والرفاه اللذين يدعمان
            قدراتنا الفردية والجماعية على اتخاذ القرارات وإقامة العلاقات وتشكيل
            العالم الذي نعيش فيه.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-8">
        {[1, 2, 3, 4].map((index) => (
          <MiniFeaturedArticle key={index} image="mini-feat-article.png" />
        ))}
      </div>
      <div className="flex gap-10">
        <FeaturedCategorie />
        <FeaturedCategorie />
        <FeaturedCategorie />
      </div>
    </div>
  );
}
