import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { AppAboutComponent } from './about/about.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
  {
    path: 'about',
    component: AppAboutComponent,
    data: {
      title: 'About',
      urls: [
        
        { title: 'About' },
      ],
    },
  },
];
