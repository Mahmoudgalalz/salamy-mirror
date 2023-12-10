import { fetchArticleGroup } from "./api/article";

export function suggestArticleGroups(data: ShowCase | undefined): FeatGroups {
  if (!data) return [];
  const articleGroups = data.data
    .map((articleGroup) => {
      return {
        id: articleGroup.id,
        name: articleGroup.attributes.Name,
        slug: articleGroup.attributes.slug,
      };
    })
    .sort(() => Math.random() - 0.5);
  return articleGroups.slice(0, 10);
}
