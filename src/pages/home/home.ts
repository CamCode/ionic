import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  nombre: string;//variable que se pasa al ngModel
  email:string;
  direccion:string;
  
  constructor(public navCtrl: NavController) {

    //Actualiza cada 2 segundos y añade una z minuscula al final 
    /*setInterval(() => {
      this.nombre +="z";
    },2000);*/

    /*this.nombre = "Escriba su nombre";
    this.email = "Ej : nombre@correo.com";
    this.direccion = "calle falsa 123";*/
  
  }
  /*teclaPress(event){
    let text = event.target.value;
    console.log(text);
    console.log(event);
  }*/
  mostrar(){
    console.log(this.nombre);
    console.log(this.email);
    console.log(this.direccion);

  }
  cambio(){
    console.log(this.nombre);//ver desde la componente el cambio del canal bidireccional
  }
}
