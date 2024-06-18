import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { DbService } from 'src/app/services/db.service';


@Component({
  selector: 'app-certificados',
  templateUrl: './certificados.page.html',
  styleUrls: ['./certificados.page.scss'],
})
export class CertificadosPage{

  formularioCertificados: FormGroup;
  userrut: any = '';
  

  constructor(
    private db: DbService ,
    private form: FormBuilder,
  ) {
    this.formularioCertificados = this.form.group({
      nombreCertificado: '',
      fechaObtencion: '',
      certificadoVence: 'si',
      fechaVencimiento: '',
    });
   }


   
   

  enviar(){

    this.userrut = localStorage.getItem('rut');

    this.db.crearCertificado(
      this.formularioCertificados.value["nombreCertificado"],
      this.formularioCertificados.value["fechaObtencion"],
      this.formularioCertificados.value["certificadoVence"],
      this.formularioCertificados.value["fechaVencimiento"],
      this.userrut,
    );

    this.db.showMessage("certificado creado!");

  }


  

}
