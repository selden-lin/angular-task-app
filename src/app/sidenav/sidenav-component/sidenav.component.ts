import { Component, OnInit, Inject } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import {SidenavDialogComponent} from '../sidenav-dialog/sidenav-dialog.component';


@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
    constructor(public dialog: MatDialog) {}

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

    ngOnInit(): void {}
}