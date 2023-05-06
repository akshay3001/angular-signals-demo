import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./feature/posts-container/posts-container.component').then(
            (c) => c.PostsContainerComponent
          ),
      },
      {
        path: 'create-post',
        loadComponent: () =>
          import('./feature/create-post/create-post.component').then(
            (c) => c.CreatePostComponent
          ),
      },
      { path: '**', redirectTo: 'posts' },
    ],
  },
  { path: '**', redirectTo: 'posts' },
];
