import { createAction, props } from '@ngrx/store';

export const addId = createAction('[ID] Add Id', props<{ id: number }>());
export const deleteId = createAction('[ID] Delete Id', props<{ id: number }>());