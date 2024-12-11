import { Task } from "./task.model";

export interface AppState {
  tasks: Task[];
  ids: number[];
}

export const initialState: AppState = {
  tasks: [],
  ids: []
};