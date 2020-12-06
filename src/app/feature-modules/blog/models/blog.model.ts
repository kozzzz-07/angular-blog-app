export type ArticleID = string;

export interface Article {
  id: ArticleID;
  title: string;
  body: string;
  excerpt: string;
  createAt: BlogDate;
  updateAt?: BlogDate;
  deleteAt?: BlogDate;
}

export type BlogDate = Date | string;

// TODO: DTOは別に＆名前をわかりやすくする
export type ArticleRequest = Partial<Pick<Article, 'title' | 'body' | 'excerpt' | 'createAt'>>;
