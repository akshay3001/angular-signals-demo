import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'posts' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./posts/posts.routes').then((m) => m.POSTS_ROUTES),
  },
];
