import { Component, OnInit, Inject  } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog'
import { MatDialog } from '@angular/material/dialog';


@Component({
    selector: 'app-sidenav-dialog',
    templateUrl: './sidenav-dialog.component.html',
    styleUrls: ['./sidenav-dialog.component.scss'],
})
export class SidenavDialogComponent implements OnInit {
    message: string = ""
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
      ngOnInit() {
        this.message = this.data.message;
      }
}
