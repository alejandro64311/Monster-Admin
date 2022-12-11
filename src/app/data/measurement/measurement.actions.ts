import { Action } from "@ngrx/store"; 
import { CreateMeasurementCommand, Measurement, UpdateMeasurementCommand } from "src/app/models/user/measurement.model";
import { PaginationWrapper, RequestPaginationApi, ResponseApi } from "src/app/utils/models/api.model";

export enum MeasurementActionTypes {
    LOAD_MEASUREMENT = "[Measurement] Load Measurement",
    LOAD_MEASUREMENT_SUCCESS = "[Measurement] Load Measurement success",
    LOAD_MEASUREMENT_BY_ID = "[Measurement] Load Measurement by id",
    LOAD_MEASUREMENT_BY_ID_SUCCESS = "[Measurement] Load Measurement by id success",
    LOAD_ERROR = "[Measurement] Load Error",
    CREATE_MEASUREMENT = "[Measurement] Create Measurement",
    CREATE_MEASUREMENT_SUCCESS = "[Measurement] Create Measurement success",
    UPDATE_MEASUREMENT = "[Measurement] Update Measurement",
    UPDATE_MEASUREMENT_SUCCESS = "[Measurement] Update Measurement success",
  }
  
  export class LoadAllMeasurements implements Action {
    readonly type = MeasurementActionTypes.LOAD_MEASUREMENT;
    constructor(public payload: {requestParams: RequestPaginationApi }) {}
  }
  export class LoadAllMeasurementsSuccess implements Action {
    readonly type = MeasurementActionTypes.LOAD_MEASUREMENT_SUCCESS;
    constructor(public payload: { data: PaginationWrapper<Measurement> }) {}
  }
  export class LoadMeasurementById implements Action {
    readonly type = MeasurementActionTypes.LOAD_MEASUREMENT_BY_ID;
    constructor(public payload: { id:number }) {}
  }
  export class LoadMeasurementByIdSuccess implements Action {
    readonly type = MeasurementActionTypes.LOAD_MEASUREMENT_BY_ID_SUCCESS;
    constructor(public payload: { data: ResponseApi<Measurement> }) {}
  }
  export class CreateMeasurement implements Action {
    readonly type = MeasurementActionTypes.CREATE_MEASUREMENT;
    constructor(public payload: { id:number,request: CreateMeasurementCommand }) {}
  }
  export class CreateMeasurementSuccess implements Action {
    readonly type = MeasurementActionTypes.CREATE_MEASUREMENT_SUCCESS;
    constructor(public payload: { data: ResponseApi<Measurement> }) {}
  }
  export class UpdateMeasurement implements Action {
    readonly type = MeasurementActionTypes.UPDATE_MEASUREMENT;
    constructor(public payload: { id:number,request: UpdateMeasurementCommand }) {}
  }
  export class UpdateMeasurementSuccess implements Action {
    readonly type = MeasurementActionTypes.UPDATE_MEASUREMENT_SUCCESS;
    constructor(public payload: { data: ResponseApi<Measurement> }) {}
  }
  export class MeasurementFailed implements Action {
    readonly type = MeasurementActionTypes.LOAD_ERROR;
    constructor(public payload: { error: any }) {}
  }
  
  