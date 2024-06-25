import { AfterViewInit, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  template: `
    <ion-content>
    <div id="map" *ngIf="mostrarMapa"></div>
    
    <ion-card *ngIf="errorAlCargar">
      <ion-card-header>
        <ion-card-title>No podemos mostrar el mapa</ion-card-title>
        <ion-card-subtitle>Error de conexión</ion-card-subtitle>
      </ion-card-header>

      <ion-card-content>
        Actualmente no posees conexión a internet, revisa tu conexión e intentalo nuevamente.
      </ion-card-content>
    </ion-card>
    
    <br>
    <div style="text-align: center;">
      <ion-button routerLink="/menu-principal" class="btn btn-primary">Ir a menu</ion-button>
    </div>
    </ion-content>
  `,
  styles: [
    `
    #map {
      height: 80%;
    }
    `,
  ],
})
export class MapaPage implements AfterViewInit {

  ngAfterViewInit(): void {
    this.createMap();
  }

  @ViewChild('map')
  mapRef?: ElementRef<HTMLElement>;

  mostrarMapa: boolean = true;
  errorAlCargar: boolean = false;

  async createMap() {
    try {
      
      //@ts-ignore
      const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
      
      const coordinates = await Geolocation.getCurrentPosition();

      var mapa = new Map(document.getElementById('map'), {
        center: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        },
        zoom: 13,
        mapId: 'DEMO_MAP_ID',
      });

      //@ts-ignore
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker") as google.maps.MarkerLibrary;


      
      
      // The marker, positioned at Uluru
      const marker = new AdvancedMarkerElement({
        map: mapa,
        position: {
          lat: coordinates.coords.latitude,
          lng: coordinates.coords.longitude
        },
        title: 'Uluru'
      });

    console.log('Current position:', coordinates);

    }
    catch(ex) {
      this.errorAlCargar = true;
      this.mostrarMapa = false;
    }
  }

  


}
