import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import {ListDialogComponent} from '../list-dialog/list-dialog.component';
import {TaskItem} from '../../models/TaskItem';

@Component({
    selector: 'app-single-list-view',
    templateUrl: './single-list-view.component.html',
    styleUrls: ['./single-list-view.component.scss'],
})

export class SingleListViewComponent implements OnInit {
    taskListItems: TaskItem[] = [];
    displayedColumns: String[] = ["name","timeSpent", "dueDate", "done"]
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        this.taskListItems = [
            {
                name: "potato",
                timeSpent: 0,
                dueDate: new Date("9/12/2020")
            },
            {
                name: "math",
                timeSpent: 0,
                dueDate: new Date("9/11/2020")
            }
        ].sort((task1, task2) => {
            if (task1.dueDate < task2.dueDate) {
                return -1;
            } else if (task1.dueDate > task2.dueDate) {
                return 1;
            } else {
                return 0;
            }
        })
    }

    openDialog() {
        const dialogRef = this.dialog.open(ListDialogComponent, {
            data: {
                message: "Hello"
            }
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}