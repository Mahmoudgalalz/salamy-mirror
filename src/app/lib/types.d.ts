type PathOptions = "full" | "category" | "group" | "main";

type ShowCase = {
  data: {
    id: number;
    attributes: {
      Name: string;
      slug: string;
      main_category: MainCategory;
      Cover: Cover;
    };
  }[];
  meta: Meta;
};

type Article = {
  articleGroupTitle: string;
  articleGroupSlug: string;
  image: Cover;
  mainCategory: {
    data: MainCategoryData;
  };
  id: number;
  attributes: ArticleAttributes;
};

type CategorizedArticles = {
  [key: string]: Article[];
};

type FeatGroups = {
  id: number;
  name: string;
  slug: string;
}[];

type CurrArticle = {
  articleGroup: string;
  images: Cover;
  main_category: {
    data: MainCategoryData;
  };
  id?: number | undefined;
  attributes?: ArticleAttributes | undefined;
};

type suggestedArticle = {
  image: Cover;
  groupSlug: string;
  article: ArticleAttributes;
};

type ArticleGroup = {
  data: ArticleGroupData[];
  meta: Meta;
};

type ArticleGroupData = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  Name: string;
  slug: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  articles: Articles;
  category: Category;
  Cover: Cover;
  main_category: {
    data: MainCategoryData;
  };
};

type Articles = {
  data: ArticleData[];
};

type ArticleData = {
  id: number;
  attributes: ArticleAttributes;
};

type ArticleAttributes = {
  Title: string;
  Content: string;
  Age: string[];
  Gender?: string[];
  References: string;
  Number: number;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Description: string;
};

type Category = {
  data: any;
};

type Cover = {
  data: CoverData;
};

type CoverData = {
  id: number;
  attributes: CoverAttributes;
};

type CoverAttributes = {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: any;
  provider: string;
  provider_metadata: any;
  createdAt: string;
  updatedAt: string;
};

type Formats = {
  small: ImageAttributes;
  thumbnail: ImageAttributes;
};

type ImageAttributes = {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: any;
  size: number;
  width: number;
  height: number;
};

type MainCategory = {
  data: MainCategoryData[];
};

type MainCategoryData = {
  id: number;
  attributes: MainCategoryAttributes;
};

type MainCategoryAttributes = {
  Name: string;
  article_groups: {
    data: ArticleGroupData[];
  };

  Customization: any;
  slug: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

type Meta = {
  pagination: Pagination;
};

type Pagination = {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
};

type ArticleProps = {
  params: {
    groupSlug: string;
    articleSlug: string;
  };
};
