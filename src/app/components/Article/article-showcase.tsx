import { useEffect, useState } from "react";
import ArrowLink from "../arrow-link";
import { fetchMainCategories } from "@/app/lib/api/main-category";
import { suggestArticleGroups } from "@/app/lib/utils";

export default function ArticleShowCase() {
  let [data, setData] = useState<ArticleGroupsData[]>();

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetchMainCategories();
        if (res) return res;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    getData().then((res) => {
      if (res) {
        setData(suggestArticleGroups(res));
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap lg:mx-5 justify-center gap-8 pt-10">
      <div className="flex gap-3 2xl:gap-8">
        {data?.slice(0, 6).map((card) => (
          <ArrowLink
            key={card.id}
            name={card.attributes.Name.toString()}
            path="/"
          />
        ))}
      </div>

      <div className="flex gap-3 2xl:gap-8">
        <div className="flex-grow" />
        {data?.slice(6, 10).map((card) => (
          <ArrowLink
            key={card.id}
            name={card.attributes.Name.toString()}
            path="/"
          />
        ))}
        <div className="flex-grow" />
      </div>
    </div>
  );
}
