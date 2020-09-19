import { Component, OnInit, Inject } from '@angular/core';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-sidenav-dialog',
    templateUrl: './sidenav-dialog.component.html',
    styleUrls: ['./sidenav-dialog.component.scss'],
})
export class SidenavDialogComponent implements OnInit {
    listName: string = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) public type: any,
        private db: TaskDataDb,
        public dialogRef: MatDialogRef<SidenavDialogComponent>
    ) {}

    ngOnInit() {}

    newListClick() {
        this.db.addNewList(this.type, this.listName).subscribe((data) => {
            this.dialogRef.close({
                data: {
                    'type': this.type,
                    'listName': this.listName
                },
            });
        });
    }
}
