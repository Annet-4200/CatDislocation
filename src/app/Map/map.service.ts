import { Injectable } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import {Cat} from '../Cat/cat.component';

@Injectable()
export class MapService {
    map: Map;
    markers: mapboxgl.Marker[] = [];
    constructor() {
        (mapboxgl as any).accessToken = 'pk.eyJ1IjoiYW5uZXQ0MjAwIiwiYSI6ImNrNXZpdmkwYjFnNXkzbnBibHkyYnEzaGEifQ.PFAlPh8_WN6sJZNIsy0_6Q';
        this.map = new Map({
            container: 'map',
            style: 'mapbox://styles/annet4200/ck5y4gc521swo1inpsm0ngf6q',
            zoom: 12,
            center: [35.046181, 48.464717]
        });
        this.map.addControl(new mapboxgl.NavigationControl());
    }
    renderMap(cats: Cat[]) {
      if (this.markers.length !== 0) {
        this.markers.forEach( marker => { marker.remove(); } );
        this.markers = [];
      }
      cats.forEach((cat) => {
        // create a HTML element for each feature
        let el = document.createElement('div');
        el.className = 'marker';

        // make a marker for each feature and add to the map
        this.markers.push(new mapboxgl.Marker(el)
          .setLngLat([cat.longitude, cat.latitude])
          .setPopup(new mapboxgl.Popup({offset: 25}) // add popups
            .setHTML('<h1>Name: ' + cat.name + '</h1><p>Owner: ' + cat.owner + '</p>'))
          .addTo(this.map));
      });
    }
}
