export type ArticleID = string;

export type Article = {
  id: ArticleID;
  title: string;
  eexcerpt: string;
  createAt: Date;
  updateAt?: Date;
  deleteAt?: Date;
};
