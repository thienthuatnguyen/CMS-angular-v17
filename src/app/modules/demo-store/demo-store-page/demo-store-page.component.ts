import { Component, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers/task.reducer';
import { Task } from '../../../models/task.model';
import { addTask, deleteTask, updateTask } from '../../../store/actions/task.actions';

@Component({
  selector: 'demo-store-page',
  templateUrl: './demo-store-page.component.html',
  styleUrls: ['./demo-store-page.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class DemoStorePageComponent {

  tasks: Task[] = [];

  constructor(private store: Store<AppState>) {
    this.store.select('tasks').subscribe((res: any) => this.tasks = res.tasks );
  }

  addNewTask() {
    const newTask: Task = {
      id: this.tasks.length ? (this.tasks.length + 1) : 1,
      title: 'New Task',
      description: 'This is a new task.'
    };
    this.store.dispatch(addTask({ task: newTask }));
  }

  updateTask(task: Task) {
    const updatedTask: Task = { ...task, title: 'Updated Task', description: 'This task has been updated.' };
    this.store.dispatch(updateTask({ task: updatedTask }));
  }

  deleteTask(id: number) {
    this.store.dispatch(deleteTask({ id }));
  }
}


//Emulated not effect style to child component 

//None effect style to child component 