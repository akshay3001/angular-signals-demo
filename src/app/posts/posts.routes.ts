import { Routes } from '@angular/router';

export const POSTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./feature/posts-container/posts-container.component').then(
        (c) => c.PostsContainerComponent
      ),
  },
];
