export type ArticleID = string;

export type Article = {
  id: ArticleID;
  title: string;
  excerpt: string;
  createAt: Date;
  updateAt?: Date;
  deleteAt?: Date;
};
