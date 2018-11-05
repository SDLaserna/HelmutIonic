import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { ConsultoriosPage } from '../pages/consultorios/consultorios';
import { LoginPage } from './../pages/login/login';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { timer } from "rxjs/observable/timer";
import { CalendarioPage } from '../pages/calendario/calendario';
import { GestionDeTurnosPage } from '../pages/gestion-de-turnos/gestion-de-turnos';
import { BuscarHistoriaClinicaPage } from '../pages/buscar-historia-clinica/buscar-historia-clinica';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;

  pages: Array<{title: string, component: any, hasChildren:boolean}>;

  subMenuVisible : boolean = false;

  mostrarAnimacionInicio : boolean = true;

  constructor(public events: Events ,public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // Tener cuidado que así como está si pongo alguno con hijos abajo de uno que si tiene,
    // no se visualiza
    this.pages = [
      { title: 'Inicio', component: HomePage, hasChildren : false },
      { title: 'Gestión de turnos', component: GestionDeTurnosPage, hasChildren:false},
      { title: 'Historia Clínica', component:BuscarHistoriaClinicaPage , hasChildren: false},
      { title: 'Calendario', component : CalendarioPage, hasChildren: false },
      { title: 'Consultorios', component: ConsultoriosPage, hasChildren: true }
      
    ];
    this.listenToLoginEvents();
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

  listenToLoginEvents() {
    this.events.subscribe('user:Secretaria', () => {
      console.log("El usuario con rol Secretaria a Iniciado sesion y se detecto en la Raiz");
    });
    this.events.subscribe('user:Profesional', () => {
      console.log("El usuario con rol Profesional a Iniciado sesion y se detecto en la Raiz");
    });
    this.events.subscribe('user:Paciente', () => {
      console.log("El usuario con rol Paciente a Iniciado sesion y se detecto en la Raiz");
    });
    this.events.subscribe('user:null', () => {
      console.log("Usuario sin Rol");
    });
  }
}
