import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from './../../services/db.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.page.html',
  styleUrls: ['./crear-usuario.page.scss'],
})
export class CrearUsuarioPage {

  formularioDatosUsusario: FormGroup;
  isReset: boolean = false;
  fotoPerfil: any='';

  constructor(private db: DbService, private http: HttpClient, private form: FormBuilder, private router: Router) {
        
    this.fotoPerfil = localStorage.getItem('fotoPerfil');
    this.formularioDatosUsusario = this.form.group({
      nombre: '',
      apellido: '',
      fechaNacimiento: '',
      contrasenna: '',
      rut: '',
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
    this.router.navigate(['menu']);
  }

  reset(){
    this.isReset = true;
    this.obtenerImagenRickyMorty();
  }

  irFoto(){
    this.router.navigate(['camara']);
  }

  obtenerImagenRickyMorty(){
    

  }


}
