import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'foo',
    loadComponent: () =>
      import('./pages/foo/foo.component').then((m) => m.FooComponent),
  },
];
