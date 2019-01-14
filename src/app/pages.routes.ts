import {Routes, RouterModule} from '@angular/router';
import { PagesComponent } from './pages/pages.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ProgressComponent } from './pages/progress/progress.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';



const pagesRoutes: Routes = [
    {
        path: '' ,
        component: PagesComponent,
        children: [
            {path: 'dashboard' , component: DashboardComponent},
            {path: 'progress' , component: ProgressComponent},
            {path: 'graphics1' , component: Graphics1Component},
            {path: '' , redirectTo: '/dashboard', pathMatch: 'full'},
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
