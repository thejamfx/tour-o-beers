import { BeerModule } from '../beer.module';
import { Injectable } from '@angular/core';
import { Beer } from '../beer.types';

@Injectable()
export class BeerService {
    constructor () {}
    public async loadBeers (): Promise<Beer[]> {
        return Promise.resolve([{
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
        }]);
    }
}
