import type { Metadata, ResolvingMetadata } from "next";
import { fetchArticleGroup } from "@/app/lib/api/article";
import { displayArticleAndSuggest } from "@/app/lib/utils";
import Article from "@/app/components/Article/Article";

export async function generateMetadata(
  { params }: ArticleProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const groupSlug = params.groupSlug;
  const articleSlug = params.articleSlug;

  const { currArticle } = await fetchArticleGroup(groupSlug).then((res) => {
    return displayArticleAndSuggest(res, articleSlug);
  });

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: currArticle?.attributes?.Title ?? "",
    description: currArticle?.attributes?.Description ?? "",
    openGraph: {
      images: [
        `http://128.199.48.214:1337${
          currArticle.images?.data.attributes.formats.small.url ?? ""
        }`,
        ...previousImages,
      ],
    },
  };
}

export default function Page({ params }: ArticleProps) {
  return <Article params={params} />;
}
