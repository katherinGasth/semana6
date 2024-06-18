import { AfterViewInit, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  template: `
    <ion-content>
    <div id="map"></div>
    <button (click)="createMap()">Create Map</button>
    <button routerLink="/menu">Ir a menu</button>
    {{mensaje}}
    <br/><br/><br/>
    -----
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

  mensaje: String = "";

  async createMap() {
    try {

      this.mensaje = "Creando mapa ..."
      
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
      this.mensaje = "Error:" + ex;
    }
  }

  


}
