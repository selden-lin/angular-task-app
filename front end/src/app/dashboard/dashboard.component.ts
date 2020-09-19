import { Component, OnInit, ViewChild } from '@angular/core';

import { MatTable } from '@angular/material/table';

import TaskDataDb from '../models/TaskDataDb';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
    @ViewChild(MatTable) table: MatTable<any>;
    todayTaskTable: TaskTableType[] = [];
    tableColumns: string[] = ['name', 'time spent', 'list name', 'list type'];
    taskTypes: string[] = ['school', 'errands-leisure', 'work'];

    constructor(private taskDb: TaskDataDb) {}

    ngOnInit(): void {
        this.initTaskTable();
    }

    initTaskTable() {
        for (let type = 0; type < this.taskTypes.length; type++) {
            this.taskDb
                .getTaskListNames(this.taskTypes[type])
                .subscribe((taskListNames: any[]) => {
                    if (!taskListNames || taskListNames.length == 0) return;

                    for (
                        let listName = 0;
                        listName < taskListNames.length;
                        listName++
                    ) {
                        this.taskDb
                            .getTasksForList(
                                this.taskTypes[type],
                                taskListNames[listName]
                            )
                            .subscribe((tasks: any[]) => {
                                if (!tasks) return;

                                for (
                                    let task = 0;
                                    task < tasks.length;
                                    task++
                                ) {
                                    let now = new Date();
                                    let taskDate = new Date(
                                        tasks[task].dueDate
                                    );
                                    if (
                                        taskDate.getFullYear() ===
                                            now.getFullYear() &&
                                        taskDate.getMonth() ===
                                            now.getMonth() &&
                                        taskDate.getDate() === now.getDate()
                                    ) {
                                        this.todayTaskTable.push({
                                            name: tasks[task].name,
                                            'time spent': tasks[task].timeSpent,
                                            'list name':
                                                taskListNames[listName],
                                            'list type': this.taskTypes[type],
                                        });
                                    }
                                }
                                if (this.todayTaskTable.length == 0 && type == this.taskTypes.length - 1) {
                                    this.todayTaskTable.push({
                                        name: 'No data',
                                        'time spent': 0,
                                        'list name': 'No data',
                                        'list type': 'No data',
                                    });
                                } 
                                this.table.renderRows();
                            });
                    }
                });
        }
    }
}

export interface TaskTableType {
    name: string;
    'time spent': number;
    'list name': string;
    'list type': string;
}
