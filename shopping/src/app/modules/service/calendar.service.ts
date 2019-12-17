import {HttpClient, HttpParams} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class CalendarService {
  constructor(
    private http: HttpClient) {
  }

  list(success?: Function, error?: Function) {
    let params = new HttpParams();
    params = params.append('pageNumber', '0');
    params = params.append('pageSize', '10');
    return this.http.get('/api/calendares/', {params: params})
    .subscribe(
      (response) => {
        if (success) {
          success(response);
        }
      },
      error1 => {
        if (error) {
          error(error1);
        }
      }
    );
  }

  createEvent(event: any, success?: Function, error?: Function) {
    return this.http.post('/api/calendares/events', event)
    .subscribe(
      (response) => {
        if (success) {
          success(response);
        }
      },
      error1 => {
        if (error) {
          error(error1);
        }
      }
    );
  }

}
