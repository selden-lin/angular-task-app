import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SingleListViewComponent} from './single-list-component/single-list-view.component';
import {ListDialogComponent} from './list-dialog/list-dialog.component';
import {ShortenDate} from './shortenDate.pipe';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
    declarations: [
        SingleListViewComponent,
        ListDialogComponent,
        ShortenDate
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatDialogModule
    ],
    providers: [],
})
export class SingleListViewModule { }
  