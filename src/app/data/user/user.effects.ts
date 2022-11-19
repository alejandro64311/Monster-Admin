import { Injectable } from "@angular/core"; 
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AlertService } from "src/app/services/commons/alert.service";
import { UserService } from "src/app/services/user.service";
import { CreateUserSuccess, LoadUserAllSuccess, LoadUserByIdSuccess, UpdateUserSuccess, UserActionTypes, UserFailed } from "./user.actions";
import { of } from "rxjs";
import { map, mergeMap, catchError, tap } from "rxjs/operators";
@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private UserService: UserService,
    private alertService: AlertService
  ) {}

  loadAllUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.LOAD_USER),
      tap(() => {
        console.log("Start Load Users All");
      }),
      mergeMap((action: any) => {
        console.log(action);
        return this.UserService.getAll(action.payload.request).pipe(
          map(
            (response) => new LoadUserAllSuccess({ data: response.data })
          ),
          tap((Users) => {
            console.log("End Load Users All", Users);
          }),
          catchError((error) => of(new UserFailed({ error: error.error })))
        );
      })
    )
  );
  loadUserById$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActionTypes.LOAD_USER_BY_ID),
    tap(() => {
      console.log("Start Load Users by id");
    }),
    mergeMap((action: any) => {
      console.log(action);
      return this.UserService.getById(action.payload.request).pipe(
        map(
          (response) => new LoadUserByIdSuccess({ data: response })
        ),
        tap((Users) => {
          console.log("End Load Users by id", Users);
        }),
        catchError((error) => of(new UserFailed({ error: error.error })))
      );
    })
  )
);
  createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserActionTypes.CREATE_USER),
      tap(() => {
        console.log("Start create Users All");
      }),
      mergeMap((action: any) => {
        console.log(action);
        return this.UserService.create(action.payload.request).pipe(
          map(
            (response) => new CreateUserSuccess({ data: response })
          ),
          tap((Users) => {
            console.log("End create Users All", Users);
          }),
          catchError((error) => of(new UserFailed({ error: error.error })))
        );
      })
    )
  );

  updateUser$ = createEffect(() =>
  this.actions$.pipe(
    ofType(UserActionTypes.UPDATE_USER),
    tap(() => {
      console.log("Start create Users All");
    }),
    mergeMap((action: any) => {
      console.log(action);
      return this.UserService.update(action.payload.id,action.payload.request).pipe(
        map(
          (response) => new UpdateUserSuccess({ data: response })
        ),
        tap((Users) => {
          console.log("End create Users All", Users);
        }),
        catchError((error) => of(new UserFailed({ error: error.error })))
      );
    })
  )
);
}
