import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { BrowserModule } from '@angular/platform-browser';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConsultoriosPage } from "../pages/consultorios/consultorios";

import { StatusBar } from '@ionic-native/status-bar';
import { LoginPage } from './../pages/login/login';
import { MyApp } from './app.component';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConsultoriosPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConsultoriosPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
