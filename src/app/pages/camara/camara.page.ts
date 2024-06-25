import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.page.html',
  styleUrls: ['./camara.page.scss'],
})
export class CamaraPage implements OnInit {

  page: number = 1;
  pageLimit: number = 1;

  imagenesPredefinidas: string[] = [];

  imageSource: any;
  constructor(
    private http: HttpClient,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.cargarImagenes();
  }

  volver() {
    this.route.navigate(['login']);
  }

  cargarImagenes() {
    this.http.get('https://rickandmortyapi.com/api/character/?page=' + this.page).subscribe((response: any) => {
      this.imagenesPredefinidas = [];
      this.pageLimit = response.info.pages;

      response.results.forEach((element : any) => {
        this.imagenesPredefinidas.push(element.image);
      });
    });
  }

  cambiarPagina(numero: number) {
    this.page = numero;
    localStorage.setItem('fotoPerfil', "");
    this.cargarImagenes();
  }

  seleccionarImagen(imagen: string) {
    if (localStorage.getItem('fotoPerfil') == imagen) {
      localStorage.setItem('fotoPerfil', "");
    }
    else {
      localStorage.setItem('fotoPerfil', imagen);
    }
    
  }

  getPageButonClass(numero: number) {
    return this.page == numero  ? "selected" : "noSelected";
  }

  getClass(imagen: string) {
    if (localStorage.getItem('fotoPerfil') == "") return "";
    return localStorage.getItem('fotoPerfil') == imagen  ? "selected" : "noSelected";
  }

  anySelected() {
    return localStorage.getItem('fotoPerfil') != "";
  }

  takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    // Can be set to the src of an image now
    this.imageSource = image.dataUrl;
    localStorage.setItem('fotoPerfil', this.imageSource);
  };  

  siguiente(){
    this.route.navigate(['crear-usuario']);
  }

}
