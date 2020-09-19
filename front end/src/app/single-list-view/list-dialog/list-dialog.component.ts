import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-list-dialog',
    templateUrl: './list-dialog.component.html',
    styleUrls: ['./list-dialog.component.scss'],
})
export class ListDialogComponent implements OnInit {
    listName: string = '';
    listType: string = '';
    taskName: string = '';
    timeSpent: string = '';
    additionalTimeSpent: number = 1;
    
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private db: TaskDataDb,
        public dialogRef: MatDialogRef<ListDialogComponent>
    ) {}

    ngOnInit() {
        this.taskName = this.data.taskName;
        this.listName = this.data.listName;
        this.listType = this.data.listType;
        this.timeSpent = this.data.timeSpent;
    }

    doneTaskClick() {
        this.db
            .deleteTaskInList(
                this.listType,
                this.listName,
                this.taskName
            )
            .subscribe((data: any[]) => {
                this.dialogRef.close({
                    'deletedTask': this.taskName
                });
            });
    }

    increaseTimeSpentClick() {
        this.db
            .increaseTimeSpentForTask(
                this.listType,
                this.listName,
                this.taskName,
                parseInt(this.timeSpent) + this.additionalTimeSpent
            )
            .subscribe((data: any[]) => {
                this.dialogRef.close({
                    'timeSpent': parseInt(this.timeSpent) + this.additionalTimeSpent,
                    'taskName': this.taskName
                });
            });
    }
}
