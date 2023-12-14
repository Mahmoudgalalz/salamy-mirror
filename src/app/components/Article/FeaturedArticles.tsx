"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { fetchArticleGroup } from "@/app/lib/api/article";
import MiniFeaturedArticle from "./MiniFeaturedArticle";
import Link from "next/link";

export function FeaturedArticles({ data }: { data?: ShowCase }) {
  const [featArticles, setFeatArticles] = useState<Article[]>();
  const [loading, setLoading] = useState<boolean>(true);
  // const [featCategories, setFeatCategories] = useState<CategorizedArticles>();

  useEffect(() => {
    async function fetchFeatArticles() {
      try {
        if (data) {
          // TODO:Fetch featured-articles endpoint instead
          const promises = data.data.map(async (articleGroup) => {
            const articleGroupData = await fetchArticleGroup(
              articleGroup.attributes.slug
            );
            const articles = articleGroupData.data[0].attributes.articles.data;

            const updatedArticles = articles.map((article) => ({
              articleGroupTitle: articleGroup.attributes.Name,
              articleGroupSlug: articleGroup.attributes.slug,
              image: articleGroup.attributes.Cover,
              attributes: article.attributes,
              id: article.id,
              mainCategory: {
                data: articleGroup.attributes.main_category.data[0],
              },
            }));

            setFeatArticles((prev) => {
              return [...(prev ?? []), ...updatedArticles];
            });
          });
          await Promise.all(promises);
        }
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }

    fetchFeatArticles();
  }, [data]);

  // useEffect(() => {
  //TODO: Categorize articles from the featured-articles endpoint
  //   function setupFeatCategories() {
  //     if (featArticles) {
  //       const categories = getCategorizedArticles(featArticles);
  //       setFeatCategories(categories);
  //       console.log(categories);
  //     }
  //   }
  //   setupFeatCategories();
  // }, [featArticles]);

  return (
    <div className="flex flex-col items-start gap-7 py-36 bg-[#F8F7FF] justify-center mx-52 h-full">
      <h4 className="text-black/50 text-xl">المقالات المميزة</h4>
      <h2 className="text-5xl font-bold">مقتطفات من مقالاتنا المميزة</h2>

      <Link
        className="w-full rounded-2xl flex my-14 h-[28rem]"
        href={`/articleGroup/${featArticles?.[0].articleGroupSlug}/article/${featArticles?.[0].attributes.slug}`}
      >
        {featArticles && (
          <Image
            src={`http://128.199.48.214:1337${featArticles?.[0].image.data.attributes.formats.thumbnail.url}`}
            loading="lazy"
            alt="article"
            className="w-1/2 h-full bg-clip-border rounded-s-xl bg-cover"
            width={600}
            height={300}
            quality={100}
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
      </Link>

      <div className="grid grid-cols-2 gap-5 mb-8">
        {!loading &&
          featArticles?.slice(1, 5).map((article) => {
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
        {
          // Featured Categories goes here
        }
      </div>
    </div>
  );
}
