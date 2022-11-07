import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserCommand, UpdateUserCommand, User } from '../models/user/user.model';
import { RequestPaginationApi, ResponseApi } from '../utils/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {



  constructor(private http: HttpClient) { } 

  getAll(
    request: RequestPaginationApi
  ): Observable<ResponseApi<User>> {
   
    return this.http.get<ResponseApi<User>>(
      `${environment.api}/user?${request.getUri()}`
    );
  }
  create(
    User:CreateUserCommand
  ): Observable<ResponseApi<User>> {
    return this.http.post<ResponseApi<User>>(
      `${environment.api}/user`,User
    );
  }
  update(
     id: number,User:UpdateUserCommand
  ): Observable<ResponseApi<User>> {
    return this.http.put<ResponseApi<User>>(
      `${environment.api}/user/${id}`,User
    );
  }
}
