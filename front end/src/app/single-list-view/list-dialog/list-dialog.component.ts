import { Component, OnInit, Inject  } from '@angular/core';

import {MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
    selector: 'app-list-dialog',
    templateUrl: './list-dialog.component.html',
    styleUrls: ['./list-dialog.component.scss'],
})
export class ListDialogComponent implements OnInit {
    message: string = ""
    constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
      ngOnInit() {
        this.message = this.data.message;
      }
}
