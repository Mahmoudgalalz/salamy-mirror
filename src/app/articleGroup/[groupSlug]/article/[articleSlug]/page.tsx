"use client";

import ActionBtn from "@/app/components/ActionBtn";
import MiniFeaturedArticle from "@/app/components/Article/MiniFeaturedArticle";
import { fetchArticleGroup } from "@/app/lib/api/article";
import {
  displayArticleAndSuggest,
  formatDateToArabic,
  removeBackgroundColors,
} from "@/app/lib/utils";
import { Divider } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Image from "next/image";

const socialMediaIcons = [
  {
    name: "linkedin",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Frame">
          <path
            id="Vector"
            d="M4.23836 15.6207H6.74487V8.0903H4.23836V15.6207ZM6.90763 5.76825C6.9004 5.3921 6.77019 5.08104 6.51701 4.83509C6.26382 4.58914 5.92746 4.46616 5.50789 4.46616C5.08833 4.46616 4.74654 4.58914 4.48251 4.83509C4.21847 5.08104 4.08646 5.3921 4.08646 5.76825C4.08646 6.13717 4.21486 6.44642 4.47166 6.69599C4.72846 6.94555 5.06301 7.07033 5.47534 7.07033H5.48619C5.91299 7.07033 6.25659 6.94555 6.51701 6.69599C6.77742 6.44642 6.90763 6.13717 6.90763 5.76825ZM13.2552 15.6207H15.7618V11.3021C15.7618 10.1881 15.4977 9.34535 14.9697 8.77385C14.4417 8.20242 13.7436 7.91669 12.8755 7.91669C11.8917 7.91669 11.1357 8.33985 10.6077 9.18619H10.6294V8.0903H8.12291C8.14461 8.56769 8.14461 11.0779 8.12291 15.6207H10.6294V11.4106C10.6294 11.1357 10.6547 10.9332 10.7054 10.8029C10.8139 10.5498 10.9767 10.3346 11.1937 10.1574C11.4107 9.9801 11.6783 9.89152 11.9966 9.89152C12.8357 9.89152 13.2552 10.4594 13.2552 11.5951V15.6207ZM18.3334 4.79169V15.2084C18.3334 16.0692 18.0277 16.8052 17.4165 17.4164C16.8052 18.0277 16.0692 18.3334 15.2084 18.3334H4.79175C3.93092 18.3334 3.19489 18.0277 2.58363 17.4164C1.97237 16.8052 1.66675 16.0692 1.66675 15.2084V4.79169C1.66675 3.93086 1.97237 3.19483 2.58363 2.58357C3.19489 1.97231 3.93092 1.66669 4.79175 1.66669H15.2084C16.0692 1.66669 16.8052 1.97231 17.4165 2.58357C18.0277 3.19483 18.3334 3.93086 18.3334 4.79169Z"
            fill="#012F2C"
          />
        </g>
      </svg>
    ),
    onclick: () => {},
  },

  {
    name: "pintrist",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99175 1.66669C5.39341 1.66669 1.66675 5.39773 1.66675 9.9996C1.66675 13.5296 3.86091 16.5475 6.95842 17.7619C6.88508 17.103 6.82008 16.0887 6.98675 15.3697C7.13841 14.7191 7.96341 11.2274 7.96341 11.2274C7.96341 11.2274 7.71425 10.7278 7.71425 9.9896C7.71425 8.83185 8.38508 7.96684 9.22091 7.96684C9.93175 7.96684 10.2742 8.50069 10.2742 9.14044C10.2742 9.8561 9.81925 10.9247 9.58508 11.9156C9.38925 12.7447 10.0009 13.4212 10.8176 13.4212C12.2967 13.4212 13.4351 11.8597 13.4351 9.60502C13.4351 7.60983 12.0026 6.21517 9.95758 6.21517C7.58842 6.21517 6.19758 7.99353 6.19758 9.8311C6.19758 10.5468 6.47341 11.315 6.81758 11.7329C6.84683 11.7644 6.86748 11.8029 6.87756 11.8447C6.88762 11.8864 6.88677 11.9301 6.87508 11.9714C6.81175 12.2342 6.67091 12.8006 6.64425 12.9165C6.60758 13.0692 6.52341 13.1017 6.36508 13.0283C5.32591 12.5437 4.67591 11.0223 4.67591 9.79944C4.67591 7.17108 6.58341 4.75712 10.1767 4.75712C13.0651 4.75712 15.3092 6.81658 15.3092 9.57002C15.3092 12.4428 13.5001 14.7524 10.9892 14.7524C10.1451 14.7524 9.35258 14.3145 9.08091 13.7965L8.56175 15.7768C8.37425 16.5008 7.86675 17.4083 7.52758 17.9622C8.32601 18.2089 9.157 18.334 9.99258 18.3334C14.5901 18.3334 18.3176 14.6023 18.3176 10.0004C18.3176 5.39856 14.5892 1.66669 9.99175 1.66669Z"
          fill="#012F2C"
        />
      </svg>
    ),
    onclick: () => {},
  },

  {
    name: "twitter",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.0001 1.66669C5.39815 1.66669 1.66675 5.39809 1.66675 10C1.66675 14.6019 5.39815 18.3334 10.0001 18.3334C14.602 18.3334 18.3334 14.6019 18.3334 10C18.3334 5.39809 14.602 1.66669 10.0001 1.66669ZM14.0049 7.94831C14.0105 8.03574 14.0105 8.12688 14.0105 8.21617C14.0105 10.9469 11.9309 14.0923 8.13066 14.0923C6.95879 14.0923 5.87248 13.7519 4.9573 13.1659C5.12471 13.1845 5.28468 13.192 5.45581 13.192C6.42307 13.192 7.31221 12.8646 8.02091 12.3103C7.11317 12.2917 6.35053 11.6964 6.09011 10.878C6.40819 10.9245 6.69465 10.9245 7.02203 10.8408C6.55463 10.7459 6.13452 10.492 5.83307 10.1224C5.53162 9.75277 5.36743 9.29019 5.36838 8.81327V8.78719C5.64182 8.9416 5.96362 9.03652 6.30031 9.04952C6.01727 8.86085 5.78516 8.60535 5.62455 8.3055C5.46393 8.0057 5.37977 7.67088 5.37955 7.33075C5.37955 6.9457 5.47999 6.59414 5.66042 6.28909C6.17921 6.92773 6.82659 7.45006 7.56047 7.82213C8.29435 8.1942 9.09833 8.40769 9.92008 8.44869C9.62808 7.0443 10.6772 5.90776 11.9383 5.90776C12.5336 5.90776 13.0692 6.15701 13.4469 6.5588C13.9137 6.47138 14.3602 6.29652 14.7582 6.06215C14.6039 6.54019 14.2802 6.94384 13.8505 7.19868C14.2672 7.15404 14.669 7.03871 15.041 6.87688C14.7602 7.28983 14.4086 7.65627 14.0049 7.94831Z"
          fill="#012F2C"
        />
      </svg>
    ),
    onclick: () => {},
  },
  {
    name: "facebook",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.66675 10.0501C1.66721 12.0468 2.37547 13.9778 3.66421 15.4961C4.95296 17.0144 6.73767 18.0204 8.69758 18.3334V12.4733H6.58341V10.0501H8.70008V8.20545C8.65333 7.7737 8.70166 7.33691 8.84158 6.92608C8.9815 6.51525 9.20966 6.14045 9.50975 5.82832C9.80991 5.51619 10.1747 5.27438 10.5781 5.12005C10.9816 4.96574 11.4138 4.90269 11.8442 4.9354C12.4692 4.94546 13.0942 5.00165 13.7109 5.1031V7.1649H12.6576C12.4786 7.14131 12.2966 7.1585 12.125 7.2152C11.9535 7.27189 11.7968 7.36665 11.6666 7.49246C11.5363 7.61828 11.4358 7.77194 11.3726 7.94208C11.3092 8.11222 11.2847 8.2945 11.3009 8.47544V10.0501H13.6101L13.2409 12.4741H11.3009V18.3334C12.8739 18.0832 14.3427 17.3849 15.5336 16.3209C16.7243 15.2569 17.5872 13.8718 18.0199 12.3298C18.4526 10.7877 18.4371 9.1531 17.9752 7.61964C17.5133 6.08615 16.6244 4.71793 15.4137 3.67698C14.203 2.63602 12.7212 1.96593 11.1437 1.74603C9.56625 1.52612 7.95918 1.76562 6.51279 2.43617C5.0664 3.10672 3.84126 4.18023 2.98241 5.52961C2.12357 6.87899 1.667 8.44769 1.66675 10.0501Z"
          fill="#012F2C"
        />
      </svg>
    ),
    onclick: () => {},
  },

  {
    name: "mail",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.875 4.16669C1.875 3.82151 2.15483 3.54169 2.5 3.54169H17.5C17.8452 3.54169 18.125 3.82151 18.125 4.16669V15.8334C18.125 16.1785 17.8452 16.4584 17.5 16.4584H2.5C2.15483 16.4584 1.875 16.1785 1.875 15.8334V4.16669ZM3.125 4.79169V5.49886L10 10.0822L16.875 5.49886V4.79169H3.125ZM16.875 7.00118L10.3467 11.3534C10.1368 11.4934 9.86325 11.4934 9.65333 11.3534L3.125 7.00118V15.2084H16.875V7.00118Z"
          fill="#012F2C"
        />
      </svg>
    ),
    onclick: () => {},
  },
];

type CurrArticle = {
  articleGroup: string;
  images: Cover;
  main_category: MainCategory;
  id?: number | undefined;
  attributes?: ArticleAttributes | undefined;
};

export default function Page({
  params,
}: {
  params: {
    groupSlug: string;
    articleSlug: string;
  };
}) {
  const [article, setArticle] = useState<CurrArticle>();
  const [suggested, setSuggested] = useState<ArticleData[]>();

  useEffect(() => {
    async function fetchData() {
      await fetchArticleGroup(params.groupSlug).then((res) => {
        const { currArticle, suggestedArticles } = displayArticleAndSuggest(
          res,
          params.articleSlug
        );

        setArticle(currArticle);
        setSuggested(suggestedArticles);
        console.log(article?.attributes?.Content);
      });
    }
    fetchData();
  }, []);
  return (
    <article>
      <header className="flex  bg-[#FFE0D0]">
        <Image
          src={`http://128.199.48.214:1337${
            article?.images.data.attributes.formats.thumbnail.url ??
            "/article.png"
          }`}
          alt={article?.images.data.attributes.alternativeText}
          className="w-7/12 bg-cover"
          width={600}
          height={600}
        />
        <div className="flex flex-col gap-16 lg:pr-14 lg:pl-44 py-16 ">
          <h3 className="text-lg 2xl:text-xl font-medium flex gap-2">
            <span>الرئيسية | </span>
            <span>{article?.main_category.data.attributes.Name} | </span>
            <span>{article?.articleGroup}</span>
          </h3>
          <h1 className="text-4xl 2xl:text-5xl font-semibold">
            {article?.attributes?.Title}
          </h1>
          <p className="text-lg leading-loose">
            {article?.attributes?.Description}
          </p>
          <div className="flex justify-between items-center  mr-16">
            <span className="px-4 py-2 bg-secondary-foreground rounded-lg text-lg">
              {formatDateToArabic(article?.attributes?.publishedAt)}
            </span>
            <span className="flex gap-4 ">
              {socialMediaIcons.map((card) => {
                return (
                  <span
                    key={card.name}
                    className="cursor-pointer bg-secondary-foreground p-2 rounded-full"
                    onClick={card.onclick}
                  >
                    {card.icon}
                  </span>
                );
              })}
            </span>
          </div>
          <div className="mr-16 flex gap-5 justify-between">
            <ActionBtn title="تحميل كملف PDF" icon="download" />
            <ActionBtn title="طباعة" icon="print" />
            <ActionBtn title="مشاركة" icon="share" />
            <ActionBtn title="نسخ الرابط" icon="copy" />
          </div>
        </div>
      </header>
      <div className="py-56 flex px-9">
        <aside className="flex flex-col pl-10 ">
          <span className="flex flex-col gap-3">
            <p>بواسطة مصطفي جمال مراجعة محمد سلطان</p>
            <div className="h-[1px] bg-black mx-2"></div>
          </span>
          <div className="flex justify-between mt-10">
            <div className="flex flex-col gap-3">
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <span
                    key={index}
                    className="font-light transition delay-75 ease-out hover:bg-[#FED] p-3 cursor-pointer hover:font-semibold rounded-full"
                  >
                    عنوان محتوي المقالة لصفحة المواضيع
                  </span>
                );
              })}
            </div>
            <Divider orientation="vertical" className="bg-divider w-0.5" />
          </div>
        </aside>
        <div
          className="flex-1 bg-inherit  text-red-950"
          dangerouslySetInnerHTML={{
            __html: removeBackgroundColors(article?.attributes?.Content) || "",
          }}
        ></div>
        <aside className="flex gap-10 w-1/4  pr-5 ">
          <Divider orientation="vertical" className="bg-divider w-0.5" />
          <div className="flex flex-col w-fit">
            <span className="flex flex-col gap-3">
              <h6 className="text-sm">{article?.articleGroup}</h6>
              <h4 className="text-2xl text-[#045346] font-bold">
                مقالات ذات صلة
              </h4>
            </span>
            {suggested?.map((article) => {
              return (
                <div key={article.id}>
                  <MiniFeaturedArticle
                    size="small"
                    title={article.attributes.Title}
                    description={article.attributes.Description}
                    articleGroupSlug={params.groupSlug}
                    articleSlug={article.attributes.slug}
                  />
                </div>
              );
            })}
          </div>
        </aside>
      </div>
    </article>
  );
}
