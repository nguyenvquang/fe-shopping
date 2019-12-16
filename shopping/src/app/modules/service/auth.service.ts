import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AngularFireAuth} from '@angular/fire/auth';
import {ToastrService} from 'ngx-toastr';
import {Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private angularFireAuth: AngularFireAuth, private toastr: ToastrService) {
  }

  login(email: string, password: string, success?: Function, error?: Function) {
    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        this.toastr.success('Successfully signed in!');
        if (success) {
          success(res);
        }
      })
      .catch(err => {
        this.toastr.error('Sign in failed!');
        if (error) {
          error();
        }
      });
  }

  verifyToken(success?: Function, error?: Function): Observable<boolean> {
    return this.http.get('/api/auth/verify/' + this.getToken())
      .pipe(map((res: any) => res.valid));
  }

  getIdToken() {
    this.angularFireAuth.idTokenResult.subscribe(
      (response: any) => {
        this.saveToken(response.token);
      }
    );
  }

  canActive(): Observable<boolean> {
    // if (!this.getToken()) {
    //   return of(false);
    // }
    // return this.verifyToken();
    return of(true);
  }


  logout() {
    return this.angularFireAuth.auth.signOut();
  }

  saveToken(token: string): void {
    console.log(token);
    localStorage.setItem(ID_TOKEN, token);
  }

  getToken(): string {
    return localStorage.getItem(ID_TOKEN);
  }

}

export const ID_TOKEN: string = "X_ID_TOKEN";
