import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize, map} from 'rxjs/operators';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';

@Injectable()
export class UrlInterceptor implements HttpInterceptor{

  constructor(public ngx: NgxSpinnerService, private auth: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const host = 'http://localhost:8081/shopping-api';
    const cloneReq = req.clone({
      url: host + req.url,
      setHeaders: {
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    });
    Promise.resolve(null).then(() => this.ngx.show('loading-service-spinner'));
    return next.handle(cloneReq).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
        }
        return event;
      }),
      catchError((err: HttpErrorResponse) => {
        if (err.status === 401) {
          this.router.navigate(['login']);
        }
        return throwError(err);
      }),
      finalize(() => {
        this.ngx.hide('loading-service-spinner');
      })
    );

  }
}
