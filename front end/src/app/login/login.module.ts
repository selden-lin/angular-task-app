import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule
    ],
    providers: [],
})
export class LoginModule { }
  