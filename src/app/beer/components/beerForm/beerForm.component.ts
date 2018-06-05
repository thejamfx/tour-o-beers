import { Component, OnInit, Input } from '@angular/core';
import { Beer } from '../../beer.types';

@Component({
    selector: 'beer-form',
    templateUrl: './beerForm.component.html',
    styleUrls: ['./beerForm.component.css']
})
export class BeerFormComponent implements OnInit {
    @Input() public beer: Beer;
    constructor () {}
    ngOnInit () {
        console.log(this.beer);
    }
}
