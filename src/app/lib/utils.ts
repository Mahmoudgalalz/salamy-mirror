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

export function displayArticleAndSuggest(
  result: ArticleGroup,
  articleSlug: string
) {
  const currArticle = {
    ...result.data[0].attributes.articles.data.find(
      (article) => article.attributes.slug === articleSlug
    ),

    articleGroup: result.data[0].attributes.Name,
    images: result.data[0].attributes.Cover,
    main_category: result.data[0].attributes.main_category,
  };

  const suggestedArticles = result.data[0].attributes.articles.data.filter(
    (article) => article.attributes.slug !== articleSlug
  );

  return { currArticle, suggestedArticles };
}

export function formatDateToArabic(inputString: string | undefined): string {
  if (!inputString) return "";
  const months = [
    "يناير",
    "فبراير",
    "مارس",
    "إبريل",
    "مايو",
    "يونيو",
    "يوليو",
    "أغسطس",
    "سبتمبر",
    "أكتوبر",
    "نوفمبر",
    "ديسمبر",
  ];

  const date = new Date(inputString);
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export function removeBackgroundColors(
  content: string | undefined
): string | undefined {
  if (!content) return undefined;
  const modifiedContent = content.replace(/background-color:[^;]+;/g, "");

  return modifiedContent;
}
