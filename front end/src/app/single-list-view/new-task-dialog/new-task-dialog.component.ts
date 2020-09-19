import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-new-task-dialog',
    templateUrl: './new-task-dialog.component.html',
    styleUrls: ['./new-task-dialog.component.scss'],
})
export class NewTaskDialogComponent implements OnInit {
    message: string = '';
    listName: string = '';
    listType: string = '';
    newTask: string = '';
    dueDate;
    constructor(
        @Inject(MAT_DIALOG_DATA) public data: any,
        private db: TaskDataDb,
        public dialogRef: MatDialogRef<NewTaskDialogComponent>
    ) {
        (this.listName = data.name), (this.listType = data.type);
        this.newTask = data.newTask;
    }
    ngOnInit() {
        this.message = this.data.message;
    }

    addTaskClick() {
        if (!this.dueDate) return;

        this.db
            .addTaskToList(
                this.listType,
                this.listName,
                this.newTask,
                this.dueDate
            )
            .subscribe((data) => {
                if(data.data === 'exists') {
                    this.dialogRef.close({
                        'exists': true,
                        'newTask': this.newTask
                    });
                } else {
                    this.dialogRef.close({
                        'exists': false,
                        'newTask': this.newTask,
                        'dueDate': this.dueDate
                    });
                }
            });
    }
}
