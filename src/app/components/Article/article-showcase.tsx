import React, { useEffect } from "react";
import ArrowLink from "../arrow-link";
import { suggestArticleGroups } from "@/app/lib/utils";

export default function ArticleShowCase({
  data,
}: {
  data: ShowCase | undefined;
}) {
  const suggested: FeatGroups = suggestArticleGroups(data);
  return (
    <div className="flex flex-wrap flex-col lg:mx-5 justify-center gap-8 pt-10">
      <div className="flex gap-3 2xl:gap-8">
        {suggested?.slice(0, 6).map((card) => (
          <ArrowLink
            key={card.id}
            name={card.name}
            path={`/articleGroup/${card.id}`}
          />
        ))}
      </div>

      <div className="flex gap-3 2xl:gap-8">
        <div className="flex-grow" />
        {suggested?.slice(6, 10).map((card) => (
          <ArrowLink
            key={card.id}
            name={card.name}
            path={`/articleGroup/${card.id}`}
          />
        ))}
        <div className="flex-grow" />
      </div>
    </div>
  );
}
