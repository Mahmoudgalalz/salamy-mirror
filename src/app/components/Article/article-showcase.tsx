import { ArticleGroups, showCase } from "@/app/lib/api/article-group";
import { useEffect, useState } from "react";
import ArrowLink from "../arrow-link";

export default function ArticleShowCase() {
  let [data, setData] = useState<ArticleGroups>();

  useEffect(() => {
    async function getData() {
      try {
        const res = await showCase();
        if (res) return res;
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }

    getData().then((res) => {
      if (res) {
        res.data = res.data.sort(() => 0.5 - Math.random());
        res.data = res.data.slice(0, 10);
        setData(res);
      }
    });
  }, []);

  return (
    <div className="flex flex-wrap mx-5 justify-center gap-8 pt-10">
      <div className="flex gap-8">
        {data?.data.slice(0, 6).map((card) => (
          <ArrowLink key={card.id} name={card.attributes.Name} path="/" />
        ))}
      </div>

      <div className="flex gap-8">
        <div className="flex-grow" />
        {data?.data.slice(6, 10).map((card) => (
          <ArrowLink key={card.id} name={card.attributes.Name} path="/" />
        ))}
        <div className="flex-grow" />
      </div>
    </div>
  );
}
