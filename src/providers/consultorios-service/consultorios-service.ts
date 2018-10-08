import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { Observable } from 'rxjs/Observable';
import { HTTP } from "@ionic-native/http";

@Injectable()
export class ConsultoriosServiceProvider {

  
  // headers : Headers = new Headers({'Content-type':'Application/json'});
  // token : string = 'dXNlcl9ndWFyYW5pOjEyMzQ1Ng==';
  /* Está hardcodeado el usuario y contraseña en la url para probar, después ver como mando bien los headers (Los tengo en un interceptor)*/
  url: string = 'https://user_guarani:123456@helmut-test.dat.cespi.unlp.edu.ar/api/helmut/';
  // url : string = 'https://helmut-test.dat.cespi.unlp.edu.ar/api/helmut/';
  
  
  constructor(public httpClient: HttpClient, public http : HTTP) {
    console.log('Hello ConsultoriosServiceProvider Provider');
    // this.headers.append('Authorization', 'Basic '+ this.token);
    // this.headers.append('Accept', 'Application/json');
    // let authorization = this.http.getBasicAuthHeader('user_guarani','123456');
    // console.log(authorization);
    // this.http.setHeader(this.url, 'Authorization', Authorization);
  }

}
