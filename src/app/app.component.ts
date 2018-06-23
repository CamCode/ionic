import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

/*menu controlador*/
import { MenuController } from 'ionic-angular';

import { TabsPage } from '../pages/tabs/tabs';
import { GlobalComponent } from '../components/global/global';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})


export class MyApp {

  @ViewChild(Nav) nav: Nav;
  
  rootPage: any = TabsPage;
  public pages: Array<{ titulo: string, component: any, parametro: string }>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    this.pages = [
      {
        titulo: "home",
        component: HomePage,
        parametro: ""
      },
      {
        titulo: "Snacks",
        component: GlobalComponent,
        parametro: "snacks"
      },
      {
        titulo: "Licores",
        component: GlobalComponent,
        parametro: "licores"
      }
    ];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  openPage(p) {
    this.nav.setRoot(p.component, { 'page': p });
  }
  toggleLeftMenu() {
    this.menuCtrl.toggle();
  }

  openMenu() {
    this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }
}
