import { AppState, initialState } from "../../models/store.model";
import { addId, deleteId } from "../actions/ids.actions";



export function IdsReducer(state = initialState, action: any): AppState {
  switch (action.type) {
    case addId.type:
      return { ...state, ids : [...state.ids, action.id] };
   
    // case deleteId.type:
    //   return { ...state, ids: state.filter(task => task.id !== action.id) };
    default:
      return state;
  }
}


