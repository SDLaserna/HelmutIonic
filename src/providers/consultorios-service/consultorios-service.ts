import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthServiceProvider } from '../auth-service/auth-service';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the ConsultoriosServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConsultoriosServiceProvider {

  
  headers : Headers = new Headers({'Content-type':'Application/json'});
  token : string = 'dXNlcl9ndWFyYW5pOjEyMzQ1Ng==';
  /* Está hardcodeado el usuario y contraseña en la url para probar, después ver como mando bien los headers */
  url : string = 'https://helmut-test.dat.cespi.unlp.edu.ar/api/helmut/';
  
  
  constructor(public http: HttpClient) {
    console.log('Hello ConsultoriosServiceProvider Provider');
    this.headers.append('Authorization', 'Basic '+ this.token);
    this.headers.append('Accept', 'Application/json');
  }

  obtenerConsultorios(): Observable<Consultorio[]>{
    // return this.http.post(this.url +'consultorios', '', );
    return this.http.post<Consultorio[]>(this.url + 'consultorios', {headers : this.headers});
  }

  obtenerSensores() : Observable <Sensor[]>{
    return this.http.get<Sensor[]>("http://java.linti.unlp.edu.ar/ProyectoCentinela/controladores/sensores/listar");
  }
}
