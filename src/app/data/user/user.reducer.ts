import { createSelector } from "@ngrx/store";
import { User } from "src/app/models/user/user.model";
import { PaginationWrapper } from "src/app/utils/models/api.model";
import { AppState } from "..";
import { BaseState, Message } from "../commons/base-state.data";
import { UserActionTypes } from "./user.actions";

export interface UserState extends BaseState {
    currentUser: User;
    users: PaginationWrapper<User>;
  }
  
  const initialUserState: UserState = {
    currentUser: null,
    users: new PaginationWrapper(),
    loading: false, 
    message: null
  };
  
  export function UserReducer(
    appUserState = initialUserState,
    action
  ): UserState {
    switch (action.type) {
      case UserActionTypes.LOAD_USER: {
        return {
          ...appUserState,
          loading: true,
        };
      }
      case UserActionTypes.LOAD_USER_SUCCESS: {
        return {
          ...appUserState,
          users: action.payload.data,
          loading: false,
        };
      }
      case UserActionTypes.LOAD_USER_BY_ID: {
        return {
          ...appUserState,
          loading: true,
        };
      }
      case UserActionTypes.LOAD_USER_BY_ID_SUCCESS: {
        return {
          ...appUserState,
          currentUser: action.payload.data,
          loading: false,
        };
      }
      case UserActionTypes.LOAD_USER_BY_FILTER: {
        return {
          ...appUserState,
          loading: true,
        };
      }
      case UserActionTypes.LOAD_USER_BY_FILTER_SUCCESS: {
        let response = action.payload.response;
        return {
          ...appUserState,
          users: response.data,
          loading: false,
          message: new Message(response.message,response.success?'success':'error'),
        };
      }
      case UserActionTypes.CREATE_USER: {
        return {
          ...appUserState,
          loading: true,
        };
      }
      case UserActionTypes.CREATE_USER_SUCCESS: {
        let response = action.payload.data;
        let users = appUserState.users;
        users.items = [...users.items, response.data];
  
        return {
          ...appUserState,
          users: users,
          currentUser: response.data,
          message: new Message(response.message,response.success?'success':'error'),
          loading: false,
        };
      }
      case UserActionTypes.UPDATE_USER: {
        return {
          ...appUserState,
          loading: true,
        };
      }
      case UserActionTypes.UPDATE_USER_SUCCESS: {
        let users = this.users;
        users.items = [...users.items.filter(c => c.id != action.payload.data.id), action.payload.data];
        return {
          ...appUserState,
          users: users,
          message:new Message(action.payload.message,action.payload.success?'success':'error'),
          loading: false,
        };
      }
      case UserActionTypes.LOAD_ERROR: {
        return {
          ...appUserState,
          loading: false, 
          message:new Message(action.payload.message,action.payload.success?'success':'error'),
        };
      }
      default:
        return appUserState;
    }
  }
  export const selectUserState = (state) => state.userState;

  export const selectAllUsers = createSelector(
    selectUserState,
    (state:UserState) => state?.users
  );
  
  export const selectCurrentUser = createSelector(
    selectUserState,
    (state:UserState) => state?.currentUser
  );
  export const selectMessageApi = createSelector(
    selectUserState,
    (state:UserState) =>state?.message
  );