import { Component, OnInit, ViewChild, Input, HostBinding } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import {MatSnackBar} from '@angular/material/snack-bar';

import {SidenavComponent} from '../../sidenav/sidenav-component/sidenav.component'
import { ListDialogComponent } from '../list-dialog/list-dialog.component';
import { NewTaskDialogComponent } from '../new-task-dialog/new-task-dialog.component';
import {DeleteListDialogComponent} from '../delete-list-dialog/delete-list-dialog.component'

import {Router} from '@angular/router';
import { TaskItem } from '../../models/TaskItem';
import TaskDataDb from '../../models/TaskDataDb';

@Component({
    selector: 'app-single-list-view',
    templateUrl: './single-list-view.component.html',
    styleUrls: ['./single-list-view.component.scss'],
})
export class SingleListViewComponent implements OnInit {
    @ViewChild(MatTable) table: MatTable<any>;
    @HostBinding('')
    @Input() sidenav: SidenavComponent;
    
    listType = '';
    listName = '';
    newTask = '';
    taskListItems: TaskItem[] = [];
    displayedColumns: String[] = ['name', 'timeSpent', 'dueDate', 'done'];

    constructor(
        public dialog: MatDialog,
        private route: ActivatedRoute,
        private db: TaskDataDb,
        private router: Router,
        private _snackBar: MatSnackBar
    ) {}

    ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
            this.listType = params.getAll('type')[0];
            this.listName = params.getAll('name')[0];

            if (!this.listType || !this.listName) return;

            this.db
                .getTasksForList(this.listType, this.listName)
                .subscribe((taskListItems: any[]) => {
                    this.taskListItems = taskListItems.sort((task1, task2) => {
                        if (task1.dueDate < task2.dueDate) {
                            return -1;
                        } else if (task1.dueDate > task2.dueDate) {
                            return 1;
                        } else {
                            return 0;
                        }
                    });
                });
        });
    }

    openEditDialog(event) {
        let taskInfo = '';
        if(event.target.nodeName === 'SPAN') {
            taskInfo = event.target.parentNode.id;
        } else if (event.target.nodeName === 'MAT-ICON' || event.target.nodeName === 'BUTTON') {
            taskInfo = event.target.id;
        } else return;
        
        let taskName = taskInfo.split(':')[0];
        let timeSpent = taskInfo.split(':')[1]

        let dialogRef = this.dialog.open(ListDialogComponent, {
            data: {
                listType: this.listType,
                listName: this.listName,
                'taskName': taskName,
                'timeSpent': timeSpent
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if(!result) return; 

            if(result.deletedTask) {
                this.taskListItems = this.taskListItems.filter((item) => {
                    return item.name != result.deletedTask
                })
            } else if(result.timeSpent) {
                this.taskListItems = this.taskListItems.map((item) => {
                    if(item.name != result.taskName) {
                        return item;
                    }  else {
                        item.timeSpent = result.timeSpent;
                        return item;
                    }
                })
            }
            this.table.renderRows();
        });
    }

    openNewTaskDialog() {
        if (this.newTask.trim() === '') return;
        let dialogRef = this.dialog.open(NewTaskDialogComponent, {
            data: {
                type: this.listType,
                name: this.listName,
                newTask: this.newTask,
            },
        });

        dialogRef.afterClosed().subscribe((newTaskResult) => {
            if (newTaskResult === undefined) return;

            this.taskListItems.push({
                name: newTaskResult.newTask,
                dueDate: newTaskResult.dueDate,
                timeSpent: 0,
            });
            this.table.renderRows();
            this.newTask = "";
        });
    }

    openDeleteListDialog() {
        let dialogRef = this.dialog.open(DeleteListDialogComponent, {
            data: {
                listType: this.listType,
                listName: this.listName,
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (!result) return;
            if (result.deleted) {
                this._snackBar.open(`list ${this.listName} deleted`, "Ok", {});
                this.router.navigate(['/'])
                this.db.toggleSidenavList();
            }
        });
    }
}
