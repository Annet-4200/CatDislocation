import { Component } from '@angular/core';
import {DataService} from './app.service';

@Component({
    selector: 'my-app',
    template: `<div class="container">
                    <cat></cat>
                    <map></map>
               </div>`,
    styleUrls: ['./app.component.css'],
    providers: [ DataService ]
})

export class AppComponent {

}
