import { Injectable } from "@angular/core"; 
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlertService } from "src/app/services/commons/alert.service";
import { MeasurementService } from "src/app/services/Measurement.service"; 
import { of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
import { CreateMeasurementSuccess, LoadMeasurementAllSuccess, LoadMeasurementByIdSuccess, MeasurementActionTypes, MeasurementFailed, UpdateMeasurementSuccess } from "./measurement.actions";
@Injectable()
export class MeasurementEffects {
  constructor(
    private actions$: Actions,
    private MeasurementService: MeasurementService,
    private alertService: AlertService
  ) {}

  loadAllMeasurements$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MeasurementActionTypes.LOAD_MEASUREMENT),
      tap(() => {
        console.log("Start Load Measurements All");
      }),
      mergeMap((action: any) => {
        console.log(action);
        return this.MeasurementService.getAllByUserId(action.payload.request).pipe(
          map(
            (response) => new LoadMeasurementAllSuccess({ data: response.data })
          ),
          tap((Measurements) => {
            console.log("End Load Measurements All", Measurements);
          }),
          catchError((error) => of(new MeasurementFailed({ error: error.error })))
        );
      })
    )
  );
  loadMeasurementById$ = createEffect(() =>
  this.actions$.pipe(
    ofType(MeasurementActionTypes.LOAD_MEASUREMENT_BY_ID),
    tap(() => {
      console.log("Start Load Measurements by id");
    }),
    mergeMap((action: any) => {
      console.log(action);
      return this.MeasurementService.getById(action.payload.request).pipe(
        map(
          (response) => new LoadMeasurementByIdSuccess({ data: response })
        ),
        tap((Measurements) => {
          console.log("End Load Measurements by id", Measurements);
        }),
        catchError((error) => of(new MeasurementFailed({ error: error.error })))
      );
    })
  )
);
  createMeasurement$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MeasurementActionTypes.CREATE_MEASUREMENT),
      tap(() => {
        console.log("Start create Measurements All");
      }),
      mergeMap((action: any) => {
        console.log(action);
        return this.MeasurementService.create(action.payload.request).pipe(
          map(
            (response) => new CreateMeasurementSuccess({ data: response })
          ),
          tap((Measurements) => {
            console.log("End create Measurements All", Measurements);
          }),
          catchError((error) => of(new MeasurementFailed({ error: error.error })))
        );
      })
    )
  );

  updateMeasurement$ = createEffect(() =>
  this.actions$.pipe(
    ofType(MeasurementActionTypes.UPDATE_MEASUREMENT),
    tap(() => {
      console.log("Start create Measurements All");
    }),
    mergeMap((action: any) => {
      console.log(action);
      return this.MeasurementService.update(action.payload.id,action.payload.request).pipe(
        map(
          (response) => new UpdateMeasurementSuccess({ data: response })
        ),
        tap((Measurements) => {
          console.log("End create Measurements All", Measurements);
        }),
        catchError((error) => of(new MeasurementFailed({ error: error.error })))
      );
    })
  )
);
}
