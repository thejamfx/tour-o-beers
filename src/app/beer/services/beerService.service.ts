import { BeerModule } from '../beer.module';
import { Injectable } from '@angular/core';
import { Beer } from '../beer.types';
import { NotificationService } from '../../shared/services/notificationService.service';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class BeerService {
    constructor (private firebaseDatabase: AngularFirestore, private notificationService: NotificationService) {}
    public loadBeers(): Observable<Beer[]> {
        this.notificationService.addNotification('Loading beers');
        return <Observable<Beer[]>>this.firebaseDatabase.collection('beers').valueChanges();
    }
    public loadBeerById (beerId: string): Observable<Beer> {
        this.notificationService.addNotification('Loading beer');
        return <Observable<Beer>>this.firebaseDatabase.collection('beers').doc(beerId).valueChanges();
    }
    public addBeer (beer: Beer): Promise<void> {
        const uId = this.firebaseDatabase.createId();
        return this.firebaseDatabase.collection('beers').doc(uId).set(beer);
    }
}
