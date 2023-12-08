type PathOptions = "full" | "category" | "group" | "main";

type ShowCase = {
  path: string;
  name: string;
};

type MainCategories = {
  data: MainCategoriesData[];
  meta: Meta;
};

type MainCategoriesData = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  Name: string;
  Customization: any;
  slug: string;
  Description: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  Header: Header;
  categories: Categories;
  article_groups: ArticleGroups;
};

type Header = {
  data: {
    id: number;
    attributes: HeaderAttributes;
  };
};

type HeaderAttributes = {
  name: string;
  alternativeText: any;
  caption: any;
  width: number;
  height: number;
  formats: {
    small: ImageAttributes;
    thumbnail: ImageAttributes;
  };
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

type Categories = {
  data: any[];
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

type ArticleGroups = {
  data: ArticleGroupsData[];
};

type ArticleGroupsData = {
  id: number;
  attributes: Attributes;
};

type Attributes = {
  Name: string;
  slug: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
};
