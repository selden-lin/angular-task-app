import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SingleListViewComponent} from './single-list-component/single-list-view.component';
import {ListDialogComponent} from './list-dialog/list-dialog.component';
import {NewTaskDialogComponent} from './new-task-dialog/new-task-dialog.component';
import {DeleteListDialogComponent} from './delete-list-dialog/delete-list-dialog.component'
import {ShortenDate} from './shortenDate.pipe';

import {FormsModule} from "@angular/forms";

import {MatSnackBarModule} from '@angular/material/snack-bar';
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
        ShortenDate,
        NewTaskDialogComponent,
        DeleteListDialogComponent
    ],
    imports: [
        CommonModule,
        MatTableModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatDividerModule,
        MatDialogModule,
        FormsModule,
        MatSnackBarModule
    ],
    providers: [],
})
export class SingleListViewModule { }
  