import { Injectable } from '@angular/core';
import {Cat} from './Cat/cat.component';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }
  isDataChanged = false;
  cats: Cat[] =
    [
      { id: 0, age: 1.5, name: 'Simon', owner: 'Kate Williams', species: 'Abyssinian', longitude: 35.005564, latitude: 48.470541 },
      { id: 1, age: 4, name: 'Millie', owner: 'Shaun Merphi', species: 'Asian cat', longitude: 35.050539, latitude: 48.451132 },
      { id: 2, age: 7.3, name: 'Pushok', owner: 'Nelli Smith', species: 'Savannah', longitude:  35.043474, latitude: 48.469367 },
      { id: 3, age: 2, name: 'Alpha', owner: 'Anna Ageeva', species: 'Ocicat', longitude: 35.027021, latitude: 48.435485 },
      { id: 4, age: 0.7, name: 'Garfild', owner: 'Lina Antonenko', species: 'Munchkin', longitude:  35.023190, latitude: 48.455408 },
      { id: 5, age: 10, name: 'Mike', owner: 'Shelli Maiden', species: 'Havana Brown', longitude:  35.013077, latitude: 48.434923 },
      { id: 6, age: 3.5, name: 'Rudick', owner: 'Neitan Decksan', species: 'Chausie', longitude:  35.053290, latitude: 48.492016 },
      { id: 7, age: 0.3, name: 'Dimok', owner: 'Julia Gray', species: 'Bengal', longitude: 35.100348, latitude: 48.471863 },
    ];
  fullCats = this.cats;
}
