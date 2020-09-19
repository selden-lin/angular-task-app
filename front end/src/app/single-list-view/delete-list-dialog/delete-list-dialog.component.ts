import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-delte-list-dialog',
    templateUrl: './delete-list-dialog.component.html',
    styleUrls: ['./delete-list-dialog.component.scss'],
})
export class DeleteListDialogComponent implements OnInit {
    listName: string = '';
    listType: string = '';
    
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private db: TaskDataDb,
        public dialogRef: MatDialogRef<DeleteListDialogComponent>
    ) {}

    ngOnInit() {
        this.listName = this.data.listName;
        this.listType = this.data.listType;
    }



    deleteListClick() {
        this.db
            .deleteTaskList(
                this.listType,
                this.listName
            )
            .subscribe((data: any[]) => {
                this.dialogRef.close({
                    'deleted': true
                });
            });
    }
}
