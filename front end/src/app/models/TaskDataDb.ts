import * as data from './taskData.json';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export default class TaskDataDb {
    taskData: {};
    @Output() change: EventEmitter<boolean> = new EventEmitter();

    constructor(private http: HttpClient) {
        this.taskData = data.default;
    }

    getTaskListTypes() {
        return this.http.get('http://localhost:3000/taskList/types').pipe(
            map((response) => {
                return response;
            })
        );
    }

    getTaskListNames(taskCategory: string) {
        return this.http
            .get('http://localhost:3000/taskList/all/' + taskCategory)
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    getTasksForList(taskCategory: string, taskList: string) {
        return this.http
            .get(
                'http://localhost:3000/task/all/' +
                    taskCategory +
                    '/' +
                    taskList
            )
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    addNewList(taskCategory: string, taskList: string) {
        return this.http
            .post<any>('http://localhost:3000/taskList/' + taskCategory, {
                listName: taskList,
            })
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    addTaskToList(
        taskCategory: string,
        taskList: string,
        newTask: string,
        dueDate
    ) {
        return this.http
            .post<any>(
                'http://localhost:3000/task/' + taskCategory + '/' + taskList,
                {
                    name: newTask,
                    dueDate: dueDate,
                }
            )
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    deleteTaskList(taskCategory: string, taskList: string) {
        return this.http
            .delete<any>(
                'http://localhost:3000/taskList/' + taskCategory + '/' + taskList,
                {}
            )
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    deleteTaskInList(taskCategory: string, taskList: string, taskName: string) {
        return this.http
            .delete<any>(
                'http://localhost:3000/task/' + taskCategory + '/' + taskList + '/' + taskName,
                {}
            )
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    increaseTimeSpentForTask(taskCategory: string, taskList: string, taskName: string, timeSpent: Number) {
        return this.http
            .put<any>(
                'http://localhost:3000/task/' + taskCategory + '/' + taskList + '/' + taskName,
                {
                    'timeSpent': timeSpent 
                }
            )
            .pipe(
                map((response) => {
                    return response;
                })
            );
    }

    toggleSidenavList() {
        this.change.emit(true);
    }
}
