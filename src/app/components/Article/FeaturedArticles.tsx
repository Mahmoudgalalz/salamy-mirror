"use client";
import { useEffect, useState } from "react";
import FeaturedCategorie from "../Category/FeaturedCategory";
import Image from "next/image";
import { showCase } from "@/app/lib/api/article-group";
import { fetchArticleGroup } from "@/app/lib/api/article";
import MiniFeaturedArticle from "./MiniFeaturedArticle";

type Article = {
  articleGroupTitle: string;
  articleGroupSlug: string;
  image: Cover;
  mainCategory: MainCategory;
  id: number;
  attributes: ArticleAttributes;
};

export function FeaturedArticles({ data }: { data?: ShowCase }) {
  const [featArticles, setFeatArticles] = useState<Article[]>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchFeatArticles() {
      try {
        if (data) {
          const promises = data.data.map(async (articleGroup) => {
            const articleGroupData = await fetchArticleGroup(
              articleGroup.attributes.slug
            );
            const articles = articleGroupData.data[0].attributes.articles.data;

            return articles
              .map((article) => ({
                ...article,
                content: article.attributes.Content,
                articleGroupTitle: articleGroup.attributes.Name,
                articleGroupSlug: articleGroup.attributes.slug,
                image: articleGroup.attributes.Cover,
                mainCategory: articleGroup.attributes.main_category,
              }))
              .sort(() => Math.random() - 0.5);
          });

          const featuredArticles = (await Promise.all(promises)).flat();

          return featuredArticles;
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    }
    fetchFeatArticles().then((featuredArticles) => {
      setFeatArticles(featuredArticles);
      setLoading(false);
    });
  }, [data]);

  return (
    <div className="flex flex-col items-start gap-7 py-36 bg-[#F8F7FF] justify-center mx-10">
      <h4 className="text-black/50 text-xl">المقالات المميزة</h4>
      <h2 className="text-5xl font-bold">مقتطفات من مقالاتنا المميزة</h2>
      <div className="w-full rounded-2xl flex my-14">
        {featArticles && (
          <Image
            src={`http://128.199.48.214:1337${featArticles?.[0].image.data.attributes.formats.thumbnail.url}`}
            loading="lazy"
            alt="article"
            className="w-1/2 h-full bg-clip-border rounded-s-xl"
            width={600}
            height={600}
          />
        )}
        <div className="bg-[#FCD961] flex flex-col gap-7 w-1/2 rounded-e-xl justify-center px-10">
          <span className="flex flex-col gap-2">
            <h5 className="text-content1">
              {featArticles?.[0].articleGroupTitle}
            </h5>
            <h2 className="text-3xl text-[#232426] font-medium">
              {featArticles?.[0].attributes.Title}
            </h2>
          </span>
          <p className="text-[#656667] leading-loose">
            {featArticles?.[0].attributes.Description}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5 mb-8">
        {!loading &&
          featArticles?.slice(1, 5).map((article) => {
            console.log(article);
            return (
              <MiniFeaturedArticle
                key={article.id}
                articleGroupSlug={article.articleGroupSlug}
                articleSlug={article.attributes.slug}
                title={article.attributes.Title}
                description={article.attributes.Description}
                category={article.articleGroupTitle}
                image={article.image}
              />
            );
          })}
      </div>
      <div className="flex gap-10">
        <FeaturedCategorie />
        <FeaturedCategorie />
        <FeaturedCategorie />
      </div>
    </div>
  );
}
