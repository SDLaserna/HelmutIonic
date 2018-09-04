import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ConsultoriosPage } from '../pages/consultorios/consultorios';
import { LoginPage } from './../pages/login/login';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { timer } from "rxjs/observable/timer";
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, hasChildren:boolean}>;

  subMenuVisible : boolean = false;

  mostrarAnimacionInicio : boolean = true;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Inicio', component: HomePage, hasChildren : false },
      { title: 'Lista de ejemplo', component: ListPage, hasChildren : false },
      { title: 'Consultorios', component: ConsultoriosPage, hasChildren: true }
      
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      timer(3000).subscribe(()=>this.mostrarAnimacionInicio=false);

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);

  }

  mostrarSubmenu(){
    this.subMenuVisible = !this.subMenuVisible;
  }

}
