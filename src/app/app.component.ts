import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    showSideNav: boolean = false;
    title = 'angular-task-app';

    sidenavToggle = () => {
        this.showSideNav = !this.showSideNav
    };
}
