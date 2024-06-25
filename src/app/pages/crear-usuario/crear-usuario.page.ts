import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from './../../services/db.service';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage {

  formularioDatosUsusario: FormGroup;
  isReset: boolean = false;
  fotoPerfil: any='';

  constructor(private db: DbService, private form: FormBuilder, private router: Router) {
        
    this.fotoPerfil = localStorage.getItem('fotoPerfil');
    this.formularioDatosUsusario = this.form.group({
      nombre: ['', Validators.required],
      apellido: ['', Validators.required],
      fechaNacimiento: ['', Validators.required],
      contrasenna: ['', Validators.required],
      rut: ['', Validators.required],
    });
   }


  irAPaginaErronea() {
    this.router.navigate(['noexiste']);
  }



  crearUsuario(){

    this.db.crearUsuario(
      this.formularioDatosUsusario.value["rut"],
      this.formularioDatosUsusario.value["contrasenna"],
      this.formularioDatosUsusario.value["nombre"],
      this.formularioDatosUsusario.value["apellido"],
      this.formularioDatosUsusario.value["fechaNacimiento"],
      this.fotoPerfil
    );
    this.router.navigate(['login']);
  }

  hasError(controlName: string, errorType: string){
    return this.formularioDatosUsusario.get(controlName)?.hasError(errorType) && this.formularioDatosUsusario.get(controlName)?.touched
  }
  
}
