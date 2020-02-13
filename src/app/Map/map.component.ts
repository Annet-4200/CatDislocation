import {Component, DoCheck, OnInit} from '@angular/core';
import { MapService } from './map.service';
import {DataService} from '../app.service';

@Component({
    selector: 'map',
    template: `<div id='map'></div>`,
    styleUrls: ['./map.component.css'],
    providers: [ MapService ]
})
export class MapComponent implements OnInit, DoCheck {
  constructor( private dataService: DataService) {}
  mapService: MapService;
    ngOnInit() {
      this.mapService = new MapService();
      this.mapService.renderMap(this.dataService.cats);
    }
    ngDoCheck() {
      if (this.dataService.isDataChanged) {
        this.mapService.renderMap(this.dataService.cats);
        this.dataService.isDataChanged = false;
      }
    }
}
