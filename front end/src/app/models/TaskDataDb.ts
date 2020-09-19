import * as data from './taskData.json';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {map} from 'rxjs/operators'

@Injectable({
    providedIn: 'root',
})
export default class TaskDataDb {
    taskData: {};

    constructor(private http: HttpClient) {
        this.taskData = data.default;
    }

    getTaskListTypes() {
        return this.http.get('http://localhost:3000/taskList/types')
            .pipe(map(response => { return response; }));
    }

    getTaskListNames(taskCategory: string) {
        return this.http.get('http://localhost:3000/taskList/all/'+taskCategory)
            .pipe(map(response => { return response; }));
    }

    getTasksForList(taskCategory: string, taskList: string) {
        return this.http.get('http://localhost:3000/task/all/'+taskCategory+'/'+taskList)
            .pipe(map(response => { return response; }));
    }

    addNewList(taskCategory: string, taskList: string) {}

    addTaskToList(taskCategory: string, taskList: string, newTask) {
        if (!this.taskData[taskCategory]?.[taskList]) {
            return false;
        }

        this.taskData[taskCategory][taskList].append(newTask);
        return true;
    }

    deleteTaskList(taskCategory: string, taskList: string) {}

    deleteTaskInList(taskCategory: string, taskList: string, taskId: string) {
        if (!this.taskData[taskCategory]?.[taskList]) {
            console.log('task list does not exist');
        }
        this.taskData[taskCategory][taskList].forEach((item, index) => {
            if (item.id == taskId)
                this.taskData[taskCategory][taskList].pop(index);
        });
        return true;
    }
}
