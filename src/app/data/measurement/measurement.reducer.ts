import { createSelector } from "@ngrx/store";
import { Measurement } from "src/app/models/user/measurement.model";
import { PaginationWrapper } from "src/app/utils/models/api.model";
import { BaseState, Message } from "../commons/base-state.data";
import { MeasurementActionTypes } from "./measurement.actions";


export interface MeasurementState extends BaseState {
    currentMeasurement: Measurement;
    Measurements: PaginationWrapper<Measurement>;
  }
  
  const initialMeasurementState: MeasurementState = {
    currentMeasurement: null,
    Measurements: new PaginationWrapper(),
    loading: false, 
    message: null
  };
  
  export function MeasurementReducer(
    appMeasurementState = initialMeasurementState,
    action
  ): MeasurementState {
    switch (action.type) {
      case MeasurementActionTypes.LOAD_MEASUREMENT: {
        return {
          ...appMeasurementState,
          loading: true,
        };
      }
      case MeasurementActionTypes.LOAD_MEASUREMENT_SUCCESS: {
        return {
          ...appMeasurementState,
          Measurements: action.payload.data,
          loading: false,
        };
      }
      case MeasurementActionTypes.LOAD_MEASUREMENT_BY_ID: {
        return {
          ...appMeasurementState,
          loading: true,
        };
      }
      case MeasurementActionTypes.LOAD_MEASUREMENT_BY_ID_SUCCESS: {
        return {
          ...appMeasurementState,
          currentMeasurement: action.payload.data,
          loading: false,
        };
      }
      case MeasurementActionTypes.CREATE_MEASUREMENT: {
        return {
          ...appMeasurementState,
          loading: true,
        };
      }
      case MeasurementActionTypes.CREATE_MEASUREMENT_SUCCESS: {
        let response = action.payload.data;
        let Measurements = appMeasurementState.Measurements;
        Measurements.items = [...Measurements.items, response.data];
  
        return {
          ...appMeasurementState,
          Measurements: Measurements,
          currentMeasurement: response.data,
          message: new Message(response.message,response.success?'success':'error'),
          loading: false,
        };
      }
      case MeasurementActionTypes.UPDATE_MEASUREMENT: {
        return {
          ...appMeasurementState,
          loading: true,
        };
      }
      case MeasurementActionTypes.UPDATE_MEASUREMENT_SUCCESS: {
        let Measurements = this.Measurements;
        Measurements.items = [...Measurements.items.filter(c => c.id != action.payload.data.id), action.payload.data];
        return {
          ...appMeasurementState,
          Measurements: Measurements,
          message:new Message(action.payload.message,action.payload.success?'success':'error'),
          loading: false,
        };
      }
      case MeasurementActionTypes.LOAD_ERROR: {
        return {
          ...appMeasurementState,
          loading: false, 
          message:new Message(action.payload.message,action.payload.success?'success':'error'),
        };
      }
      default:
        return appMeasurementState;
    }
  }
  export const selectMeasurementState = (state) => state.MeasurementState;
  export const selectAllMeasurements = createSelector(
    selectMeasurementState,
    (state) => state?.Measurements
  );
  
  export const selectCurrentMeasurement = createSelector(
    selectMeasurementState,
    (state) => state?.currentMeasurement
  );
  export const selectMessageApi = createSelector(
    selectMeasurementState,
    (state) =>state.message
  );