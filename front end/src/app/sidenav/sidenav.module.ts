import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SidenavComponent} from './sidenav-component/sidenav.component';
import {SidenavDialogComponent} from './sidenav-dialog/sidenav-dialog.component';

import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from '../app-routing.module';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

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
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        AppRoutingModule,
        FormsModule
    ],
    exports: [
        SidenavComponent
    ],
    providers: []
})
export class SidenavModule { }
  