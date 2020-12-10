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
export type ArticlePostDto = Partial<Pick<Article, 'title' | 'body' | 'excerpt' | 'createAt'>>;

export type ArticleUpdateDto = Pick<Article, 'id' | 'title' | 'body' | 'excerpt' | 'createAt'>;
