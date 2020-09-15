import { Component, OnInit } from '@angular/core';

import {TaskItem} from '../models/TaskItem';

@Component({
    selector: 'app-single-list-view',
    templateUrl: './single-list-view.component.html',
    styleUrls: ['./single-list-view.component.scss'],
})

export class SingleListViewComponent implements OnInit {
    taskListItems: TaskItem[] = [];
    displayedColumns: String[] = ["name","timeSpent", "dueDate"]
    constructor() {}

    ngOnInit(): void {
        this.taskListItems = [
            {
                name: "potato",
                timeSpent: 0,
                dueDate: new Date("9//12/2020")
            }
        ]
    }
}
