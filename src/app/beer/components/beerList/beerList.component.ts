import { Component, OnInit, OnDestroy } from '@angular/core';
import { BeerService } from '../../services/beerService.service';
import { Beer } from '../../beer.types';
import { BeerModalService } from '../../services/beerModalService.service';
import { Observable } from 'rxjs';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

@Component({
    selector: 'beer-list',
    templateUrl: './beerList.component.html',
    styleUrls: ['./beerList.component.css'],
    providers: [BeerService, BeerModalService]
})
export class BeerListComponent implements OnInit {
    public displayedColumns: string[];
    public beers: Observable<Beer[]>;
    private selectedBeers: Beer[];

    constructor (private beerService: BeerService, private beerModalService: BeerModalService) {}

    public ngOnInit (): void {
        this.displayedColumns = ['name', 'brewery'];
        this.retrieveBeerList();
    }
    public openCreationModal (): void {
        this.beerModalService.openModel();
    }
    public updateSelectedItems ($event): void {
        this.selectedBeers = $event; 
    }
    public deleteSelected (): void {
        this.selectedBeers.forEach(async (beer) => {
            await this.beerService.deleteBeer(beer);
        });
    }
    public hasSelectedItems (): boolean {
        return this.selectedBeers && this.selectedBeers.length > 0;
    }
    private retrieveBeerList (): void {
        this.beers = this.beerService.loadBeers();
    }
}
