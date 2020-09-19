import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import { ListDialogComponent } from '../list-dialog/list-dialog.component';
import { TaskItem } from '../../models/TaskItem';
import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-single-list-view',
    templateUrl: './single-list-view.component.html',
    styleUrls: ['./single-list-view.component.scss'],
})
export class SingleListViewComponent implements OnInit {
    listType = "";
    listName = "";
    taskListItems: TaskItem[] = [];
    displayedColumns: String[] = ['name', 'timeSpent', 'dueDate', 'done'];
    constructor(public dialog: MatDialog, private route: ActivatedRoute, private db:TaskDataDb) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.listType = params.getAll('type')[0];
            this.listName = params.getAll('name')[0];

            if (!this.listType || !this.listName) return;

            this.db.getTasksForList(this.listType, this.listName).subscribe((taskListItems: any[]) => {
                this.taskListItems = taskListItems.sort((task1, task2) => {
                    if (task1.dueDate < task2.dueDate) {
                        return -1;
                    } else if (task1.dueDate > task2.dueDate) {
                        return 1;
                    } else {
                        return 0;
                    }
                });
            })
            
        });
    }

    openDialog() {
        const dialogRef = this.dialog.open(ListDialogComponent, {
            data: {
                message: 'Hello',
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
