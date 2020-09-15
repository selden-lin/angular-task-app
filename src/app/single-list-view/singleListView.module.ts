import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SingleListViewComponent} from './single-list-view.component';
import {ShortenDate} from './shortenDate.pipe';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';

@NgModule({
    declarations: [
        SingleListViewComponent,
        ShortenDate
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule
    ],
    providers: [],
})
export class SingleListViewModule { }
  