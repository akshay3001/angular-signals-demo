import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  #http = inject(HttpClient);
  posts$ = this.#http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
}
