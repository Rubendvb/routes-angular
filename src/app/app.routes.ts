import { Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portfolio/card/card.component';
import { RedirectComponent } from './redirect/redirect.component';

export const routes: Routes = [
  {
    path: '',
    component: TitleComponent,
    pathMatch: 'full',
  },
  {
    path: 'portfolio',
    component: CardComponent,
    children: [
      {
        path: ':id',
        component: CardComponent,
      },
    ],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
