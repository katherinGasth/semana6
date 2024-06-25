import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { ToastController } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private db!: SQLiteObject;
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private sqlite: SQLite, private toast: ToastController, private router: Router) {
    this.initDatabase();
   }

   getIsDBReady() {
      return this.isDBReady.asObservable();
   }


   initDatabase() : void {
    this.sqlite
      .create({name: "kathy.db", location: "default"})
      .then((db: SQLiteObject) => {
        this.db = db;
        this.createTables();
        this.isDBReady.next(true);
    });
   }

   cerrarConexion() {
    this.db.close();
   }

  createTables() : void {

  
    this.db.executeSql(
      `DROP TABLE EXPERIENCIA`).then(() => console.log("Tabla usuario borrada"));

    this.db.executeSql(
      `DROP TABLE CERTIFICADO`).then(() => console.log("Tabla certificado borrada"));

    this.db.executeSql(
      `DROP TABLE USUA`).then(() => console.log("Tabla usuario borrada"));

   
    this.db.executeSql(
      `
        CREATE TABLE IF NOT EXISTS USUA (
          rut TEXT primary key,
          contrasenna TEXT,
          nombre TEXT,
          apellido TEXT,
          fechaNacimiento DATE,
          fotoPerfil TEXT
        )
      `
    ).then(() => console.log("Tabla usuario creada"));

    this.db.executeSql(
      `
        CREATE TABLE IF NOT EXISTS CERTIFICADO (
          nombreCertificado TEXT primary key,
          fechaObtencion DATE,
          vencimiento TEXT,
          fechaVencimiento DATE,
          userRut TEXT references USUARIO (rut)
        )
      `
    ).then(() => console.log("Tabla certificado creada"));

    this.db.executeSql(
      `
        CREATE TABLE IF NOT EXISTS EXPERIENCIA (
          nombreEmpresa TEXT primary key,
          annoInicio TEXT,
          trabajaActual TEXT,
          annoTermino DATE,
          cargo TEXT,
          userRut TEXT references USUARIO (rut)

        )
      `
    )
      .then(() => console.log("Tabla experiencia creada"));
    ;
  }




  async crearUsuario(rut: string, contrasenna: string, nombre: string, apellido: string, fechaNacimiento: Date, fotoPerfil: string){
    await this.db.executeSql(
      "INSERT INTO USUA(rut, contrasenna, nombre, apellido, fechaNacimiento, fotoPerfil) VALUES (?,?,?,?,?,?)",
      [rut, contrasenna, nombre, apellido, fechaNacimiento, fotoPerfil]
    );
    this.showMessage("Usuario creado!");
  }

  async crearExperiencia(nombreEmpresa: string, annoInicio: Date, trabajaActual: string, annoTermino: Date, cargo: string, userRut: string){
    await this.db.executeSql(
      "INSERT INTO EXPERIENCIA(nombreEmpresa, annoInicio, trabajaActual, annoTermino, cargo, userRut) VALUES (?,?,?,?,?,?)",
      [nombreEmpresa, annoInicio, trabajaActual, annoTermino, cargo, userRut]
    );
    this.showMessage("Experiencia creada!")
  }

  async crearCertificado(nombreCertificado: string, fechaObtencion: Date, vencimiento: string, fechaVencimiento: Date,  userRut: string){
    await this.db.executeSql(
      "INSERT INTO CERTIFICADO(nombreCertificado, fechaObtencion, vencimiento, fechaVencimiento, userRut) VALUES (?,?,?,?,?)",
      [nombreCertificado, fechaObtencion, vencimiento, fechaVencimiento, userRut]
    );
    this.showMessage("CertificadoCreado!")
  }

  obtenerUsuario(rut: string) {
    return this.db.executeSql(
      "SELECT * FROM USUA WHERE rut = ?",
      [rut]
    );
  }

  obtenerExperiencia(rut: string){
    return this.db.executeSql(
      "SELECT * FROM EXPERIENCIA WHERE userRut = ?",
      [rut]
    );
  }

  obtenerCertificado(rut: string){
    return this.db.executeSql(
      "SELECT * FROM CERTIFICADO WHERE userRut = ?",
      [rut]
    );
  }

  cambiarContrasenna(nuevacontrasenna: string, rut: string){
    return this.db.executeSql(
      "UPDATE USUA SET contrasenna = ? WHERE rut = ?",
      [nuevacontrasenna, rut]
    );

  }
  

  async showMessage(text: string) {
    var toast = await this.toast.create({
      message: text,
      duration: 2000
    });
    toast.present();
  }






  canActivate(){
    this.router.navigate(['login']);
    return false;
  }

}
