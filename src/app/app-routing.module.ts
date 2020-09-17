import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {TimeGraphComponent} from './time-graph/time-graph.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {LoginComponent} from './login/login.component';
import {SingleListViewComponent} from './single-list-view/single-list-component/single-list-view.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: DashboardComponent
    },
    {
        path: 'timeGraph',
        component: TimeGraphComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'list',
        component: SingleListViewComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
