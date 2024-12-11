import { createSelector } from '@ngrx/store';
import { AppState } from '../../models/store.model';

export const selectTasks = (state: AppState) => state.tasks;

export const selectTaskById = (id: number) =>
  createSelector(selectTasks, tasks => tasks.find(task => task.id === id));