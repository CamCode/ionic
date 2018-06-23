import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the GlobalComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'global',
  templateUrl: 'global.html'
})
export class GlobalComponent {

  titulo: string;

  constructor(public navParams: NavParams) {
    let page = navParams.get('page');
    this.titulo = page.titulo;
    console.log("estamos en: " + page.parametro);

  }

}
