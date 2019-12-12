import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {NgxSpinnerService} from 'ngx-spinner';
import {Observable, throwError} from 'rxjs';
import {catchError, finalize} from 'rxjs/operators';

@Injectable()
export class UrlInterceptor implements HttpInterceptor{

  constructor(public ngx: NgxSpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const host = 'http://localhost:8081/shopping-api';
    const cloneReq = req.clone({
      url: host + req.url
    });
    console.log(cloneReq);
    Promise.resolve(null).then(() => this.ngx.show('loading-service-spinner'));
    return next.handle(cloneReq).pipe(
      catchError((err: HttpErrorResponse) => throwError(err)),
      finalize(() => {
        this.ngx.hide('loading-service-spinner');
      })
    );

  }
}
