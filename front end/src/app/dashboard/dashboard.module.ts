import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardComponent} from './dashboard.component';

import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        CommonModule,
        MatGridListModule,
        MatCardModule,
        MatTableModule
    ],
    providers: [],
})
export class DashboardModule { }
  