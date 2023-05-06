import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./posts/posts.routes').then((m) => m.POSTS_ROUTES),
  },
];
