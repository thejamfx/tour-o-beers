import { BeerModule } from '../beer.module';
import { Injectable } from '@angular/core';
import { Beer } from '../beer.types';
import { NotificationService } from '../../shared/services/notificationService.service';
import { AngularFirestore, DocumentChangeAction, DocumentSnapshot, Action } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable()
export class BeerService {
    constructor (
        private firestore: AngularFirestore, private notificationService: NotificationService
    ) {}
    public loadBeers (options?: { limit: number }): Observable<Beer[]> {
        return this.firestore.collection('beers', ref => options ? ref.limit(options.limit) : ref).snapshotChanges().pipe(
            map(this.processSnapshotData.bind(this))
        );
    }
    public loadBeerById (beerId: string): Observable<Beer> {
        return <Observable<Beer>>this.firestore.collection('beers').doc(beerId).snapshotChanges().pipe(
            map((snapshot: Action<DocumentSnapshot<{}>>) => {
                const beer = snapshot.payload.data() as Beer;
                beer.id = snapshot.payload.id;
                return beer;
            })
        );
    }
    public createBeer (beer: Beer): Promise<void> {
        const uid = this.firestore.createId();
        console.log(beer);
        return this.firestore.collection('beers').doc(uid).set(beer)
            .then(() => this.notificationService.addNotification('Added beer'))
            .catch((reason) => this.notificationService.addNotification(reason));
    }
    public deleteBeer (beer: Beer): Promise<void> {
        const beerPath = 'beers/' + beer.id;
        return this.firestore.doc(beerPath).delete()
            .then(() => this.notificationService.addNotification('Deleted: ' + beer.name))
            .catch((reason) => this.notificationService.addNotification(reason));
    }
    public updateBeer(beer: Beer): Promise<void> {
        const beerPath = 'beers/' + beer.id;
        return this.firestore.doc(beerPath).update(beer)
            .then(() => this.notificationService.addNotification('Updated: ' + beer.name))
            .catch((reason) => this.notificationService.addNotification(reason));
    }
    private processSnapshotData (snapshots: DocumentChangeAction<{}>[]): Beer[] {
        return snapshots.map((snapshot: DocumentChangeAction<{}>) => {
            const beer = snapshot.payload.doc.data() as Beer;
            beer.id = snapshot.payload.doc.id;
            return beer;
        });
    }
}
