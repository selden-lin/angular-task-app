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
    listTypes: string[] = [];
    taskLists = {}
    constructor(public dialog: MatDialog, private db: TaskDataDb) {}

    ngOnInit(): void {
        this.getTaskLists();
        this.db.change.subscribe(result => {
            this.getTaskLists();
        })
    }

    openDialog(event) {
        const dialogRef = this.dialog.open(SidenavDialogComponent, {});
        dialogRef.componentInstance.type = event.srcElement.id;

        dialogRef.afterClosed().subscribe((result) => {
            if(result === undefined) return;
            this.taskLists[result.data.type].push(result.data.listName)
        });
    }

    getTaskLists () {
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
}