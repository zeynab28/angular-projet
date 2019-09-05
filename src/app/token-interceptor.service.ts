import { Injectable,Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { AuthentificationService } from './authentification.service'

@Injectable(
//   {
//   providedIn: 'root'
// }
)
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler){
    let authService = this.injector.get(AuthentificationService)
    const headers= new HttpHeaders;
    headers.append('content-type', 'application/json');
    const token =authService.getToken() ;
    headers.append('Authorization', 'Bearer ' + token);
    let tokenizedReq=request.clone(
      {
       setHeaders: {
           'Authorization': `Bearer ${token}`
       }
      })
      return next.handle(tokenizedReq);
  //    let authentificationService = this.injector.get(AuthentificationService)
  //    let tokenizeReq = req.clone({
  //      setHeaders:{
  //       Authorization: `Bearer ${authentificationService.getToken()}`
  //      }
  //    })
  //   return next.handle(tokenizeReq)
    
}
}

