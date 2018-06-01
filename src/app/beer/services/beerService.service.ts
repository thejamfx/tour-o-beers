import { BeerModule } from '../beer.module';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beer } from '../classes/beer';
import { Beer as _Beer } from '../beer.types';

@Injectable()
export class BeerService {
    constructor () {}
    public getListOfFields (): any[] {
        const beer = new Beer();
        console.log(Object.getOwnPropertyNames(beer));
        return Object.keys(beer);
    }
    public loadBeers (): Observable<_Beer[]> {
        const beer = new Beer();
        console.log(Object.keys(beer));
        const beers = [{
            id: '1',
            name: 'Non Alcoholic Beer',
            brewery: 'Unknown'
        }, {
            id: '2',
            name: 'Hoppi Shiro',
            brewery: 'Unknown'
        }, {
            id: '3',
            name: 'Hoppi Kuro',
            brewery: 'Unknown'
        }, {
            id: '4',
            name: 'Asahi',
            brewery: 'Unknown'
        }, {
            id: '5',
            name: 'Red Horse',
            brewery: 'Unknown'
        }, {
            id: '6',
            name: 'Budweiser',
            brewery: 'Unknown'
        }, {
            id: '7',
            name: 'Strongbow',
            brewery: 'Unknown'
        }];
        return of(beers);
    }
}
