import { Injectable, NgModule } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from "@angular/common/http";
import { HTTP_INTERCEPTORS } from "@angular/common/http";

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // let jwt = sessionStorage.getItem("jwt");
        // const dupReq = req.clone({ headers: req.headers.set("Access-Control-Allow-Origin", "*")}); // <-- Lo mete dentro de Access-Control-Request-Headers, entonces no lo toma
        const dupReq = req.clone({ headers: req.headers.set("Authorization", "Basic dXNlcl9ndWFyYW5pOjEyMzQ1Ng==")}); //Este es el código de como viaja en POSTMAN el user_guarani:1234 
        return next.handle(dupReq);
    }
};

@NgModule({
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true }
    ]
})

export class InterceptorModule { }