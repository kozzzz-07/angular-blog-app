import { ArticleID, ArticleRequest } from './../models/blog.model';
import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/blog.model';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  constructor(
    private http: HttpClient,
    @Inject('API_URL') private url: string
  ) {}

  getArticles(): Observable<Article[]> {
    return this.http
      .get<Article[]>(`${this.url}/articles`)
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }

  getArticle(id: ArticleID): Observable<Article> {
    return this.http
      .get<Article>(`${this.url}/articles/${id}`)
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }

  postArticle(article: ArticleRequest): Observable<Article> {
    return this.http
      .post<Article>(`${this.url}/articles/`, article)
      .pipe(tap((data) => console.log(JSON.stringify(data))));
  }

  // update

  // delete
}
