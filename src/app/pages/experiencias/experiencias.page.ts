import { Component, OnInit } from '@angular/core';

import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.page.html',
  styleUrls: ['./experiencias.page.scss'],
})
export class ExperienciasPage{

  formularioExperiencias: FormGroup;
  userrut: any = '';

  constructor(
    private form: FormBuilder,
    private db: DbService, 
   ) {
    this.formularioExperiencias = this.form.group({
      nombreEmpresa: '',
      annoInicio: '',
      trabajaActual: 'si',
      annoTermino: '',
      cargo: '',
    });
    
   }


  enviar(){

    this.userrut = localStorage.getItem('rut');
    this.db.crearExperiencia(
      this.formularioExperiencias.value["nombreEmpresa"],
      this.formularioExperiencias.value["annoInicio"],
      this.formularioExperiencias.value["trabajaActual"],
      this.formularioExperiencias.value["annoTermino"],
      this.formularioExperiencias.value["cargo"],
      this.userrut
    );
    this.db.showMessage("Experiencia creada!")
  }

  

}
