import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidenavComponent} from './sidenav-component/sidenav.component';
import {SidenavDialogComponent} from './sidenav-dialog/sidenav-dialog.component';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [
        SidenavComponent,
        SidenavDialogComponent,
        SidenavDialogComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatExpansionModule,
        MatDialogModule
    ],
    exports: [
        SidenavComponent
    ],
    providers: []
})
export class SidenavModule { }
  