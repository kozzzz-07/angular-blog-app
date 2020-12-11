export type ArticleID = string;

export interface Article {
  id: ArticleID;
  title: string;
  body: string;
  excerpt: string;
  createdAt: BlogDate;
  updatedAt?: BlogDate;
}

export type BlogDate = Date | string;

export type ArticlePostDto = Partial<Pick<Article, 'title' | 'body' | 'excerpt' | 'createdAt'>>;

export type ArticleUpdateDto = Pick<Article, 'id' | 'title' | 'body' | 'excerpt' | 'updatedAt'>;
