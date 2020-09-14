import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimeGraphComponent } from './time-graph/time-graph.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LoginModule } from './login/login.module';
import { SingleListViewModule } from './single-list-view/singleListView.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TimeGraphComponent,
    TaskViewComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    LoginModule,
    SingleListViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
