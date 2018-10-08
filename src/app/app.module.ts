import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from './../pages/login/login';
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
import { ConsultoriosPage } from '../pages/consultorios/consultorios';
import { RegisterPage } from '../pages/register/register';
import { InterceptorModule } from '../interceptors/interceptor.module';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ConsultoriosPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG), /*--> Para configurar con nuestro proyecto de firebase */
    AngularFireAuthModule,
    InterceptorModule,
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    ConsultoriosPage,
    RegisterPage
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
