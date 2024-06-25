import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { DbService } from '../services/db.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  formularioDatosUsusario: FormGroup;
  isReset: boolean = false;
  userrut: any='';
  nombreUsuario: any = '';

  constructor(private db: DbService ,private form: FormBuilder, private router: Router) {
    this.userrut = localStorage.getItem('rut');

    this.nombreUsuario = localStorage.getItem('nombre');
    
    this.formularioDatosUsusario = this.form.group({
      passAnterior: '',
      passNueva: '',
    });
  }

  ngOnInit() {
    
  }

  irAPaginaErronea() {
    this.router.navigate(['noexiste']);
  }

  enviar(){
    this.db.getIsDBReady().subscribe(async (isReady) => {

      if(isReady) {
        var res = await this.db.obtenerUsuario(this.userrut);

        if(res.rows.length > 0) {
          var usuario = res.rows.item(0);
          if (usuario.contrasenna === this.formularioDatosUsusario.value["passAnterior"]){
            this.db.cambiarContrasenna(this.formularioDatosUsusario.value["passNueva"], this.userrut);
            this.router.navigate(["login"]);
          };
        };
      };
    });
  }

  reset(){
    this.isReset = true;
  }

  irAPaginaMap(){
    this.router.navigate(['mapa']);
  }

}
