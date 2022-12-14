import { Action } from "@ngrx/store";
import { CreateUserCommand, UpdateUserCommand, User } from "src/app/models/user/user.model";
import { PaginationWrapper, RequestPaginationApi, ResponseApi, ResponsePaginationApi } from "src/app/utils/models/api.model";

export enum UserActionTypes {
    LOAD_USER = "[User] Load User",
    LOAD_USER_SUCCESS = "[User] Load User success",
    LOAD_USER_BY_ID = "[User] Load User by id",
    LOAD_USER_BY_ID_SUCCESS = "[User] Load User by id success",
    LOAD_USER_BY_FILTER = "[User] Load User by filter",
    LOAD_USER_BY_FILTER_SUCCESS = "[User] Load User by filter success",
    LOAD_ERROR = "[User] Load Error",
    CREATE_USER = "[User] Create User",
    CREATE_USER_SUCCESS = "[User] Create User success",
    UPDATE_USER = "[User] Update User",
    UPDATE_USER_SUCCESS = "[User] Update User success",
    SELECT_USER = "[User] Select User",
  }
  
  export class LoadUserAll implements Action {
    readonly type = UserActionTypes.LOAD_USER;
    constructor(public payload: { request: RequestPaginationApi }) {}
  }
  export class LoadUserAllSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USER_SUCCESS;
    constructor(public payload: { data: PaginationWrapper<User> }) {}
  }
  export class LoadUserById implements Action {
    readonly type = UserActionTypes.LOAD_USER_BY_ID;
    constructor(public payload: { id:number }) {}
  }
  export class LoadUserByIdSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USER_BY_ID_SUCCESS;
    constructor(public payload: { data: ResponseApi<User> }) {}
  }
  export class LoadUserByFilter implements Action {
    readonly type = UserActionTypes.LOAD_USER_BY_FILTER;
    constructor(public payload: { request: RequestPaginationApi }) {}
  }
  export class SelectUser implements Action {
    readonly type = UserActionTypes.SELECT_USER;
    constructor(public payload: { user: User }) {}
  }
  export class LoadUserByFilterSuccess implements Action {
    readonly type = UserActionTypes.LOAD_USER_BY_FILTER_SUCCESS;
    constructor(public payload: { response: ResponsePaginationApi<User> }) {}
  }

  export class CreateUser implements Action {
    readonly type = UserActionTypes.CREATE_USER;
    constructor(public payload: { request: CreateUserCommand }) {}
  }
  export class CreateUserSuccess implements Action {
    readonly type = UserActionTypes.CREATE_USER_SUCCESS;
    constructor(public payload: { data: ResponseApi<User> }) {}
  }
  export class UpdateUser implements Action {
    readonly type = UserActionTypes.UPDATE_USER;
    constructor(public payload: { id:number,request: UpdateUserCommand }) {}
  }
  export class UpdateUserSuccess implements Action {
    readonly type = UserActionTypes.UPDATE_USER_SUCCESS;
    constructor(public payload: { data: ResponseApi<User> }) {}
  }
  export class UserFailed implements Action {
    readonly type = UserActionTypes.LOAD_ERROR;
    constructor(public payload: { error: any }) {}
  }
  
  