"use client";
import MiniFeaturedArticle from "@/app/components/Article/MiniFeaturedArticle";
import { fetchArticleGroup } from "@/app/lib/api/article";
import { displayArticleAndSuggest, modifyHtml } from "@/app/lib/utils";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { ArticleFooter } from "@/app/components/Article/ArticleFooter";
import ArticleHeader from "@/app/components/Article/ArticleHeader";
import Link from "next/link";
import { fetchMainCategory } from "@/app/lib/api/main-category";
import { shuffleArray } from "@/app/lib/utils";

export default function Page({
  params,
}: {
  params: {
    groupSlug: string;
    articleSlug: string;
  };
}) {
  const [article, setArticle] = useState<CurrArticle>();
  const [group, setGroup] = useState<ArticleData[]>();
  const [suggestedArticles, setSuggestedArticles] =
    useState<suggestedArticle[]>();

  useEffect(() => {
    async function fetchData() {
      await fetchArticleGroup(params.groupSlug).then((res) => {
        const { currArticle, suggestedArticles } = displayArticleAndSuggest(
          res,
          params.articleSlug
        );

        setArticle(currArticle);
        setGroup(suggestedArticles);
      });
    }
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (article) {
      document.title = article?.attributes?.Title || "";
      fetchMainCategory(article?.main_category.data.attributes.slug).then(
        async (res) => {
          const articleGroups = res.data[0].attributes.article_groups.data;
          const newSuggestedArticles = [];

          for (const group of articleGroups) {
            const groupRes = await fetchArticleGroup(group.attributes.slug);

            const articles = groupRes.data[0].attributes.articles.data.map(
              (article) => ({
                image: group.attributes.Cover,
                groupSlug: group.attributes.slug,
                article: article.attributes,
              })
            );

            newSuggestedArticles.push(...articles);

            await new Promise((resolve) => setTimeout(resolve, 2));
          }

          setSuggestedArticles(newSuggestedArticles);
        }
      );
    }
  }, [article]);

  return (
    <article>
      <ArticleHeader
        image={article?.images}
        main_category={article?.main_category.data.attributes.Name}
        articleGroup={article?.articleGroup}
        title={article?.attributes?.Title}
        description={article?.attributes?.Description}
        publishedAt={article?.attributes?.publishedAt}
      />
      <main className="py-56 flex px-9">
        <aside className="flex flex-col pl-10 sticky top-10 h-full w-1/4">
          <span className="flex flex-col gap-3">
            <h2 className="3xl:text-xl">بواسطة مصطفي جمال مراجعة محمد سلطان</h2>
            <hr className="h-[1.5px] bg-black mx-2" />
          </span>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col gap-10">
              {[...(group ?? []), article]
                .sort((a, b) => {
                  const numA = a?.attributes?.Number || 0;
                  const numB = b?.attributes?.Number || 0;
                  return numA - numB;
                })
                .map((item) => {
                  return (
                    <Link
                      key={item?.id}
                      href={`/articleGroup/${params.groupSlug}/article/${item?.attributes?.slug}`}
                    >
                      <span
                        className={`font-light ${
                          item?.id === article?.id &&
                          "bg-[#FED] font-semibold p-5 leading-[2.5rem]"
                        } cursor-pointer p-3 rounded-full 3xl:text-xl`}
                      >
                        {item?.attributes?.Title}
                      </span>
                    </Link>
                  );
                })}
            </div>
            <Divider
              orientation="vertical"
              className="bg-divider w-0.5 h-11/12"
            />
          </div>
        </aside>
        <section className="flex-1 px-5">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: modifyHtml(article?.attributes?.Content) || "",
            }}
          ></div>
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl text-[#045346] font-semibold mt-20 3xl:text-3xl">
              المزيد حول المقالة
            </h2>
            <ArticleFooter
              references={modifyHtml(article?.attributes?.References)}
            />
          </div>
        </section>
        <aside className="flex gap-10 w-1/4 h-full pr-5 sticky top-10">
          <Divider
            orientation="vertical"
            className="bg-divider w-0.5 h-11/12"
          />
          <div className="flex flex-col w-fit">
            <span className="flex flex-col gap-3">
              <h6 className="text-sm 3xl:text-lg">
                {article?.main_category.data.attributes.Name}
              </h6>
              <h2 className="text-2xl text-[#045346] font-bold 3xl:text-4xl">
                مقالات ذات صلة
              </h2>
            </span>
            {shuffleArray(suggestedArticles ?? [])
              .slice(0, 7)
              .map((article: suggestedArticle) => {
                return (
                  <MiniFeaturedArticle
                    size="small"
                    key={article.article.slug}
                    image={article.image}
                    title={article.article.Title}
                    description={article.article.Description}
                    articleSlug={article.article.slug}
                    articleGroupSlug={article.groupSlug}
                  />
                );
              })}
          </div>
        </aside>
      </main>
    </article>
  );
}
