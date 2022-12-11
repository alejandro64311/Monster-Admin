import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateMeasurementCommand, Measurement, UpdateMeasurementCommand } from '../models/user/measurement.model';
import { PaginationWrapper, RequestPaginationApi, ResponseApi, ResponsePaginationApi } from '../utils/models/api.model';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {


constructor(private http: HttpClient) { } 

getAllByUserId( 
  request: RequestPaginationApi
): Observable<ResponsePaginationApi<Measurement>> {
 
  return this.http.get<ResponsePaginationApi<Measurement>>(
    `${environment.api}/v1/measurements?${request.getUri()}`
  );
}
getById(
  userId:number
): Observable<ResponseApi<Measurement>> {
 
  return this.http.get<ResponseApi<Measurement>>(
    `${environment.api}/v1/measurements/${userId}`
  );
}
create(
  userId:number,
  Measurement:CreateMeasurementCommand
): Observable<ResponseApi<Measurement>> {
  return this.http.post<ResponseApi<Measurement>>(
    `${environment.api}/v1/measurements/${userId}`,Measurement
  );
}
update(
   id: number,Measurement:UpdateMeasurementCommand
): Observable<ResponseApi<Measurement>> {
  return this.http.put<ResponseApi<Measurement>>(
    `${environment.api}/v1/measurements/${id}`,Measurement
  );
}
}
