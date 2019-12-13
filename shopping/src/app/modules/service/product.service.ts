import {Injectable} from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable()
export class ProductService {
  constructor(
    private http: HttpClient) {
  }

  list(success?: Function, error?: Function) {
    let params = new HttpParams();
    params = params.append('pageNumber', '1');
    params = params.append('pageSize', '10');
    return this.http.get('/api/products/', {params: params})
      .subscribe(
        (response) => {
          console.log(response);
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
