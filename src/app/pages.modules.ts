import { NgModule } from '@angular/core';
import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graphics1Component } from './pages/graphics1/graphics1.component';
import { PagesComponent } from './pages/pages.component';
import { SharedModule } from './shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { FormsModule } from '@angular/forms';
import { IncrementadorComponent } from './components/incrementador/incrementador.component';
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from './components/grafico-dona/grafico-dona.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent,
        IncrementadorComponent,
        GraficoDonaComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        PagesComponent
    ],
    imports: [
        SharedModule,
        FormsModule,
        PAGES_ROUTES,
        ChartsModule,
        BrowserModule
    ]

})
export class PageModule { }
