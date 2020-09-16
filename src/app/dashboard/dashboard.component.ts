import { Component, OnInit } from '@angular/core';

import TaskDataDb from '../models/TaskDataDb';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
})


export class DashboardComponent implements OnInit {
    todayTaskTable: TaskTableType[] = [];
    tableColumns: string[] = ["name", "time spent", "list name", "list type"]
    taskDb: TaskDataDb = new TaskDataDb();
    taskTypes: string[] = ["school", "errands/leisure", "work"]
    
    constructor() {}

    ngOnInit(): void { 
        this.initTaskTable();
    }

    initTaskTable () {
        for(let type=0;type<this.taskTypes.length;type++) {
            let taskListNames = this.taskDb.getTaskListNames(this.taskTypes[type]);
            
            if (!taskListNames || taskListNames.length == 0) continue;
            
            for(let listName=0;listName<taskListNames.length;listName++) {
                console.log(listName)
                let tasks = this.taskDb.getTasksForList(this.taskTypes[type], taskListNames[listName])
                if (!tasks) break;
                
                let now = new Date();
                for(let task=0;task<tasks.length;task++) {
                    let taskDate = new Date(tasks[task].dueDate); 
                    console.log(taskDate)
                    console.log(now)
                    if( taskDate.getFullYear() === now.getFullYear() &&
                        taskDate.getMonth() === now.getMonth() &&
                        taskDate.getDate() === now.getDate()) {
                        this.todayTaskTable.push({
                            "name": tasks[task].name,
                            "time spent": tasks[task].timeSpent,
                            "list name": taskListNames[listName],
                            "list type": this.taskTypes[type]
                        })
                    }
                }
            }
        }
    }
}

export interface TaskTableType {
    'name': string
    'time spent': number
    'list name': string,
    'list type': string 
}

