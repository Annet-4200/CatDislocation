import {Component} from '@angular/core';
import {DataService} from '../app.service';
import {FormControl} from '@angular/forms';

export class Cat {
    id: number;
    age: number;
    name: string;
    owner: string;
    species: string;
    latitude: number;
    longitude: number;

    constructor(id: number,  age: number, name: string, owner: string, species: string, latitude: number, longitude: number) {
        this.id = id;
        this.age = age;
        this.name = name;
        this.owner = owner;
        this.species = species;
        this.latitude = latitude;
        this.longitude = longitude;
    }
}
@Component({
    selector: 'cat',
    templateUrl: './cat.component.html',
    styleUrls: ['./cat.component.css']
})
export class CatComponent {
  constructor(public dataService: DataService) {}
  selected = new FormControl(0);
  nameToFind = '';
  breedToFind = '';
  ageToFind = 0;
  editMode = false;
  cat: Cat = new Cat(0, 4, 'Vaska', 'Alina Ruchinskaya', 'American Bobtail', 48.450541, 35.070645);
  addCat(age: number, name: string, owner: string, species: string, latitude: number, longitude: number): void {
        this.dataService.isDataChanged = true;
        if ( age == null || name == null || name.trim() === '' || owner == null ||
          owner.trim() === '' || species == null || species.trim() === '' || latitude == null || longitude == null) {
            return;
        }
        this.dataService.cats.push(new Cat(this.dataService.cats.length, age, name, owner, species, latitude, longitude));
  }
  editCat(id: number, age: number, name: string, owner: string, species: string, latitude: number, longitude: number): void {
    this.dataService.isDataChanged = true;
    if (id == null || age == null || name == null || name.trim() === '' || owner == null ||
      owner.trim() === '' || species == null || species.trim() === '' || latitude == null || longitude == null) {
      return;
    }
    this.dataService.cats[id] = new Cat(id, age, name, owner, species, latitude, longitude);
    this.dataService.fullCats[id] = new Cat(id, age, name, owner, species, latitude, longitude);
  }
  findCatByName(name: string) {
    this.dataService.isDataChanged = true;
    this.dataService.fullCats = this.dataService.cats;
    this.dataService.cats = this.dataService.cats.filter( cat => {
      return cat.name.toLowerCase().includes(name.toLowerCase()) ;
    });
    this.selected.setValue(0);
  }
  findCatByBreed(breed: string) {
    this.dataService.isDataChanged = true;
    this.dataService.fullCats = this.dataService.cats;
    this.dataService.cats = this.dataService.cats.filter( cat => {
      return cat.species.toLowerCase().includes(breed.toLowerCase()) ;
    });
    this.selected.setValue(0);
  }
  findCatByAge(age: number) {
    this.dataService.isDataChanged = true;
    this.dataService.fullCats = this.dataService.cats;
    this.dataService.cats = this.dataService.cats.filter( cat => {
      return cat.age <= age;
    });
    this.selected.setValue(0);
  }
  reset() {
    this.dataService.isDataChanged = true;
    this.breedToFind = '';
    this.nameToFind = '';
    this.ageToFind = 0;
    this.dataService.cats = this.dataService.fullCats;
  }
}
