import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import {SidenavDialogComponent} from '../sidenav-dialog/sidenav-dialog.component';
import {forkJoin} from 'rxjs';

import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    listTypes: string[] = [];
    taskLists = {}
    constructor(public dialog: MatDialog, private db: TaskDataDb) {}

    ngOnInit(): void {
        this.db.getTaskListTypes().subscribe((data: any[]) => {
            this.listTypes = data;
            for (let x=0;x<this.listTypes.length;x++) {
                let type = this.listTypes[x];
                let taskListNames = this.db.getTaskListNames(type)
                    .subscribe((taskListData: any[]) => {
                        this.taskLists[type] = taskListData;
                    });
            }
        })
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