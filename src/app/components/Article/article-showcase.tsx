import { useEffect, useState } from "react";
import ArrowLink from "../arrow-link";
import { suggestArticleGroups } from "@/app/lib/utils";
import { showCase } from "@/app/lib/api/article-group";

export default function ArticleShowCase() {
  let [data, setData] = useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await showCase();
        if (res) {
          const suggestedArticleGroups = suggestArticleGroups(res);
          setData(suggestedArticleGroups);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap lg:mx-5 justify-center gap-8 pt-10">
      <div className="flex gap-3 2xl:gap-8">
        {data?.slice(0, 6).map((card) => (
          <ArrowLink key={card.id} name={card.name} path={`/`} />
        ))}
      </div>

      <div className="flex gap-3 2xl:gap-8">
        <div className="flex-grow" />
        {data?.slice(6, 10).map((card) => (
          <ArrowLink key={card.id} name={card.name} path="/" />
        ))}
        <div className="flex-grow" />
      </div>
    </div>
  );
}
