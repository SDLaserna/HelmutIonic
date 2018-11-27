import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
// import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ConsultoriosServiceProvider } from '../providers/consultorios-service/consultorios-service';
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import { HTTP } from "@ionic-native/http"; 
import { AngularFireModule } from "angularfire2";
import { FIREBASE_CONFIG } from './app.firebase.config';
import { AngularFireAuthModule } from "angularfire2/auth";
// import { ConsultoriosPage } from '../pages/consultorios/consultorios';
// import { RegisterPage } from '../pages/register/register';
import { InterceptorModule } from '../interceptors/interceptor.module';
import { ComponentsModule } from '../components/components.module';
import { CalendarioPageModule } from '../pages/calendario/calendario.module';
import { SeleccionDeTurnoPageModule } from '../pages/seleccion-de-turno/seleccion-de-turno.module';
import { SeleccionDeTurnoPage } from '../pages/seleccion-de-turno/seleccion-de-turno';
import { GestionDeTurnosPage } from '../pages/gestion-de-turnos/gestion-de-turnos';
import { GestionDeTurnosPageModule } from '../pages/gestion-de-turnos/gestion-de-turnos.module';
import { ListaDeMedicosPageModule } from '../pages/lista-de-medicos/lista-de-medicos.module';
import { ListaDeMedicosPage } from '../pages/lista-de-medicos/lista-de-medicos';
import { FormsModule } from '@angular/forms';
import { ConsultoriosPageModule } from '../pages/consultorios/consultorios.module';
import { LoginPageModule } from '../pages/login/login.module';
import { RegisterPageModule } from '../pages/register/register.module';
import { HistoriaClinicaPageModule } from '../pages/historia-clinica/historia-clinica.module';
import { HistoriaClinicaPage } from '../pages/historia-clinica/historia-clinica';
import { BuscarHistoriaClinicaPage } from '../pages/buscar-historia-clinica/buscar-historia-clinica';
import { BuscarHistoriaClinicaPageModule } from '../pages/buscar-historia-clinica/buscar-historia-clinica.module';
import { ModificarDatosPacientePage } from '../pages/modificar-datos-paciente/modificar-datos-paciente';
import { ModificarDatosPacientePageModule } from '../pages/modificar-datos-paciente/modificar-datos-paciente.module';
import { PopupDatosDelPacientePageModule } from '../pages/popup-datos-del-paciente/popup-datos-del-paciente.module';




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    // LoginPage,
    // ConsultoriosPage,
    // RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), /*--> Para configurar con nuestro proyecto de firebase */
    AngularFireAuthModule,
    InterceptorModule,
    ComponentsModule,
    CalendarioPageModule,
    SeleccionDeTurnoPageModule,
    GestionDeTurnosPageModule,
    ListaDeMedicosPageModule,
    ConsultoriosPageModule,
    LoginPageModule,
    RegisterPageModule,
    FormsModule,
    HistoriaClinicaPageModule,
    BuscarHistoriaClinicaPageModule,
    ModificarDatosPacientePageModule,
    PopupDatosDelPacientePageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    // LoginPage,
    // ConsultoriosPage,
    // RegisterPage,
    SeleccionDeTurnoPage,
    GestionDeTurnosPage,
    ListaDeMedicosPage,
    BuscarHistoriaClinicaPage,
    HistoriaClinicaPage,
    ModificarDatosPacientePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    ConsultoriosServiceProvider,
    HTTP
  ]
})
export class AppModule {}
