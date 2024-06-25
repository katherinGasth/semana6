import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  user: string = '';
  nombreUsuraio: string = '';

  constructor( private form: FormBuilder, private route: Router, private alertController: AlertController, private db: DbService) { 
    this.formularioLogin = this.form.group({
      rut: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
   
  }

  enviar(){
      this.db.getIsDBReady().subscribe(async (isReady) => {

        if(isReady) {
          var res = await this.db.obtenerUsuario(this.formularioLogin.value["rut"]);
  
          if(res.rows.length > 0) {
            var usuario = res.rows.item(0);

            if(this.formularioLogin.value["password"] == usuario.contrasenna){
              this.user = usuario.rut;
              this.nombreUsuraio = usuario.nombre;
              localStorage.setItem('nombre', this.nombreUsuraio);
              localStorage.setItem('rut', this.user);
              localStorage.setItem('fotoPerfil', usuario.fotoPerfil);
              this.route.navigate(['menu-inicio']);
            }else {
              this.presentAlert('Contraseña incorrecta, intentelo de nuevo');
            };
          } else {
            this.presentAlert('Rut incorrecto, intentelo de nuevo');
          };
        } else {
          this.presentAlert('Intentar denuevo');
        };
      

    })
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: message,
      buttons: ['ok']
    });

    await alert.present();

  }

  hasError(controlName: string, errorType: string){
    return this.formularioLogin.get(controlName)?.hasError(errorType) && this.formularioLogin.get(controlName)?.touched
  }

  registrarse(){
    this.route.navigate(['camara']);
  }

  

}


