import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { DbService } from 'src/app/services/db.service';
import { Geolocation } from '@capacitor/geolocation';
import { GoogleMap } from '@capacitor/google-maps';
import { Subscription } from 'rxjs';

const apiKey = 'AIzaSyBLJYUqJi9mmIa_9u8PBz8JoYlONm1tlyU';

@Component({
  selector: 'app-mis-datos',
  templateUrl: './mis-datos.page.html',
  styleUrls: ['./mis-datos.page.scss'],
})
export class MisDatosPage implements OnInit, OnDestroy {

  usuario : any = {
    rut: '',
    contrasenna: '',
    nombre: '',
    apellido: '',
    fechaNacimiento: ''
  };

  subscription?: Subscription;

  experiencias: any[] = []

  certificados: any[] = []

  constructor(private db: DbService, private route: Router) {}

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  async ngOnInit() {
    var userRut = localStorage.getItem('rut');

    this.subscription = this.db.getIsDBReady().subscribe(async (isReady) => {

      if(isReady) {
        var res = await this.db.obtenerUsuario(userRut!);

        if(res.rows.length > 0) {
          var usuario = res.rows.item(0);
          this.usuario = usuario;
        };

        var resE = await this.db.obtenerExperiencia(userRut!);

        if(resE.rows.length > 0) {
          for(let index = 0; index < resE.rows.length; index++){
            const element = resE.rows.item(index);
            this.experiencias.push(element);
          }
        };
        
        var resC = await this.db.obtenerCertificado(userRut!);

        if(resC.rows.length > 0) {
          for (let index = 0; index < resC.rows.length; index++) {
            const element = resC.rows.item(index);
            this.certificados.push(element);
          }
        }
      }
    });
  }

 
}
