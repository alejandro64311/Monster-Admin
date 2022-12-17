import { createSelector } from "@ngrx/store";
import { ChartMeasurement } from "src/app/models/user/chartMeasurement.model";
import { Measurement } from "src/app/models/user/measurement.model";
import { PaginationWrapper } from "src/app/utils/models/api.model";
import { BaseState, Message } from "../commons/base-state.data";
import { MeasurementActionTypes } from "./measurement.actions";


export interface MeasurementState extends BaseState {
    currentMeasurement: Measurement;
    chartMeasurements: ChartMeasurement[];
    measurements: PaginationWrapper<Measurement>;
  }
  
  const initialMeasurementState: MeasurementState = {
    currentMeasurement: null,
    chartMeasurements: null,
    measurements: new PaginationWrapper(),
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
        console.log("action.payload.data",action.payload);
        
        return {
          ...appMeasurementState,
          measurements: action.payload.data,
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
      case MeasurementActionTypes.LOAD_CHART_MEASUREMENT_BY_ID: {
        return {
          ...appMeasurementState,
          loading: true,
        };
      }
      case MeasurementActionTypes.LOAD_CHART_MEASUREMENT_BY_ID_SUCCESS: {
        return {
          ...appMeasurementState,
          chartMeasurements: action.payload.data,
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
        let Measurements = appMeasurementState.measurements;
        Measurements.items = [...Measurements.items, response.data];
  
        return {
          ...appMeasurementState,
          measurements: Measurements,
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
          measurements: Measurements,
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
  export const selectMeasurementState = (state) => state.measurementState;
  export const selectAllMeasurements = createSelector(
    selectMeasurementState,
    (state) => state?.measurements
  );
  export const selectChartMeasurements = createSelector(
    selectMeasurementState,
    (state) => state?.chartMeasurements
  );
  
  export const selectCurrentMeasurement = createSelector(
    selectMeasurementState,
    (state) => state?.currentMeasurement
  );
  export const selectMessageApi = createSelector(
    selectMeasurementState,
    (state) =>state.message
  );