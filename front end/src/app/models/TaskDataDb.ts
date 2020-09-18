import * as data from './taskData.json';


export default class TaskDataDb {
    taskData: {}

    constructor() {
        this.taskData = data.default;
    }

    getTaskListTypes () {
        return Object.keys(this.taskData);
    }

    getTaskListNames(taskCategory: string) {
        if(this.taskData[taskCategory]) {
            return Object.keys(this.taskData[taskCategory])
        }
        return []
    }

    getTasksForList(taskCategory: string, taskList: string) {
        return this.taskData[taskCategory]?.[taskList];
    }

    addNewList(taskCategory: string, taskList: string) {
        
    }

    addTaskToList(taskCategory: string, taskList: string, newTask) {
        if(!this.taskData[taskCategory]?.[taskList]) {
            return false;
        }

        this.taskData[taskCategory][taskList].append(newTask);
        return true;
    }

    deleteTaskList(taskCategory: string, taskList: string) {
        
    }

    deleteTaskInList(taskCategory: string, taskList: string, taskId: string) {
        if (!this.taskData[taskCategory]?.[taskList]) {
            console.log("task list does not exist")
        }
        this.taskData[taskCategory][taskList].forEach((item, index) => {
            if(item.id == taskId) 
                this.taskData[taskCategory][taskList].pop(index);
        })
        return true;
    }
}