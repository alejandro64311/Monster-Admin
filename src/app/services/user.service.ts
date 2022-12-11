import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserCommand, UpdateUserCommand, User } from '../models/user/user.model';
import { RequestPaginationApi, ResponseApi, ResponsePaginationApi } from '../utils/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { } 

  getAll(
    request: RequestPaginationApi
  ): Observable<ResponsePaginationApi<User>> {
   
    return this.http.get<ResponsePaginationApi<User>>(
      `${environment.api}/v1/users?${request.getUri()}`
    );
  }
  getById(
    id:number
  ): Observable<ResponseApi<User>> {
    return this.http.get<ResponseApi<User>>(
      `${environment.api}/v1/users/${id}`
    );
  }
  getByFilter(
    request: RequestPaginationApi
  ): Observable<ResponsePaginationApi<User>> {
    return this.http.get<ResponsePaginationApi<User>>(
      `${environment.api}/v1/users/filter?${request.getUri()}`
    );
  }
  create(
    User:CreateUserCommand
  ): Observable<ResponseApi<User>> {
    return this.http.post<ResponseApi<User>>(
      `${environment.api}/users`,User
    );
  }
  update(
     id: number,User:UpdateUserCommand
  ): Observable<ResponseApi<User>> {
    return this.http.put<ResponseApi<User>>(
      `${environment.api}/users/${id}`,User
    );
  }
}
