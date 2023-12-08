export function suggestArticleGroups(data: MainCategories) {
  let allArticleGroups: ArticleGroupsData[] = [];

  data.data.forEach((mainCategory) => {
    const articleGroups = mainCategory.attributes.article_groups.data;
    allArticleGroups = allArticleGroups.concat(...articleGroups);
  });

  allArticleGroups = allArticleGroups.sort(() => 0.5 - Math.random());

  return allArticleGroups.slice(0, 10);
}
