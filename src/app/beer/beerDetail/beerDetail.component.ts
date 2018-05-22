import { Component, OnInit } from '@angular/core';
import { Beer } from '../beer.types';

@Component({
  selector: 'beer-detail',
  templateUrl: './beerDetail.component.html',
  styleUrls: ['./beerDetail.component.css']
})
export class BeerDetailComponent implements OnInit {
    private beer: Beer;
    constructor () {}
    public ngOnInit () {
        this.beer = {
            id: 'beer id',
            name: 'beer name'
        };
    }
    public onNameChange ($event: any): void {
        console.log('change happened');
        console.log(this.beer);
    }
}
