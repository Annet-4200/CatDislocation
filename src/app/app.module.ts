import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import {CatComponent} from './Cat/cat.component';
import {MapComponent} from './Map/map.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';

@NgModule({
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatTabsModule, MatExpansionModule,
    MatFormFieldModule, MatButtonModule, MatIconModule, MatInputModule, MatSliderModule],
    declarations: [ AppComponent, MapComponent, CatComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule { }
