import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {SidenavDialogComponent} from '../sidenav-dialog/sidenav-dialog.component';

import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    db: TaskDataDb
    listTypes: string[] = [];
    taskLists = {}
    constructor(public dialog: MatDialog) {}

    ngOnInit(): void {
        this.db = new TaskDataDb();
        this.listTypes = this.db.getTaskListTypes();

        for (let x=0;x<this.listTypes.length;x++) {
            let type = this.listTypes[x];
            let taskListNames = this.db.getTaskListNames(type);
            this.taskLists[type] = taskListNames;
        }
    }

    openDialog() {
        const dialogRef = this.dialog.open(SidenavDialogComponent, {
            data: {
                message: "Hello"
            }
        });

        dialogRef.afterClosed().subscribe((result) => {
            console.log(`Dialog result: ${result}`);
        });
    }
}