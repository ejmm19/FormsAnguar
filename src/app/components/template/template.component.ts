import { Component } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form) {
        border:1px solid red;
    }
  `]
})
export class TemplateComponent {

    usuario:Object = {
      nombre: null,
      apellido: null,
      correo: null,
      pais: "",
      sexo: "Hombre",
      acepta: false
    };
    paises =[{
        codigo: "CO",
        nombre: "Colombia"
    },{
        codigo: "EC",
        nombre: "Ecuador"
    }];
    sexos =["Hombre","Mujer"];

  constructor() { }

  guardar(forma:NgForm){
    console.log('Formulario posteado');
    console.log('NgForm',forma);
    console.log('data',forma.value);

    console.log("usuario",this.usuario)
  }

}
