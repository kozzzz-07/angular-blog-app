export type ArticleID = string;

export type Article = {
  id: ArticleID;
  title: string;
  body: string;
  excerpt: string;
  createAt: BlogDate;
  updateAt?: BlogDate;
  deleteAt?: BlogDate;
};

export type BlogDate = Date | string;
