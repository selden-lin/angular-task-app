import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SingleListViewComponent} from './single-list-view.component';
import {ShortenDate} from './shortenDate.pipe';

import {MatTableModule} from '@angular/material/table';

@NgModule({
    declarations: [
        SingleListViewComponent,
        ShortenDate
    ],
    imports: [
        CommonModule,
        MatTableModule
    ],
    providers: [],
})
export class SingleListViewModule { }
  