import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TimeGraphComponent } from './time-graph/time-graph.component';
import { TaskViewComponent } from './task-view/task-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { SingleListViewModule } from './single-list-view/singleListView.module';
import { SidenavModule } from './sidenav/sidenav.module';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
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
    MatExpansionModule,
    MatDialogModule,
    MatListModule,
    LoginModule,
    SingleListViewModule,
    DashboardModule,
    SidenavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
