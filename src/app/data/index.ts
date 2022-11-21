import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { hydrationMetaReducer } from "./hydration/hydration.reducer";
import { MeasurementReducer, MeasurementState } from "./measurement/measurement.reducer";
import { UserReducer, UserState } from "./user/user.reducer";

export interface AppState {
  userState: UserState;
  measurementState: MeasurementState; 
}

export const reducers: ActionReducerMap<AppState> = {
  userState: UserReducer,
  measurementState: MeasurementReducer, 
};


export const metaReducers: MetaReducer[] = [
    hydrationMetaReducer
  ]