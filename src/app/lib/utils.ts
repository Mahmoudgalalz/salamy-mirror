import * as cheerio from "cheerio";

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

export function modifyHtml(htmlString: string | undefined): string {
  if (!htmlString) return "";

  htmlString = htmlString.replace(/background-color:[^;]+;/g, "");

  const $ = cheerio.load(htmlString);

  $("span[style]").each((index, element) => {
    const $span = $(element);

    const styleAttribute = $span.attr("style") || "";

    $span.attr(
      "style",
      styleAttribute.replace(
        /font-family:[^;]*/i,
        `font-family: '__Readex_Pro_48f1ec', '__Readex_Pro_Fallback_48f1ec'`
      )
    );
  });

  return $.html();
}

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];
  let currentIndex = shuffledArray.length,
    randomIndex,
    temporaryValue;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    temporaryValue = shuffledArray[currentIndex];
    shuffledArray[currentIndex] = shuffledArray[randomIndex];
    shuffledArray[randomIndex] = temporaryValue;
  }

  return shuffledArray;
}

// export function getCategorizedArticles(
//   articles: Article[] | undefined
// ): CategorizedArticles {
//   if (!articles) return {};
//   const categorizedArticles: CategorizedArticles = {};

//   articles.forEach((article) => {
//     const mainCategory = article.mainCategory.data.attributes.Name;

//     if (categorizedArticles[mainCategory]) {
//       categorizedArticles[mainCategory].push(article);
//     } else {
//       categorizedArticles[mainCategory] = [article];
//     }
//   });

//   return categorizedArticles;
// }
