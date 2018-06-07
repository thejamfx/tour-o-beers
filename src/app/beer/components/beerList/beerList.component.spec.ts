// import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';

// import { BeerListComponent } from './beerList.component';
// import { SharedModule } from '../../../shared/shared.module';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { MatSnackBarModule, MatDialogModule } from '@angular/material';
// import { BeerService } from '../../services/beerService.service';

// describe('BeerListComponent', () => {
//     let component: BeerListComponent;
//     let fixture: ComponentFixture<BeerListComponent>;
//     const angularFirestoreStub = {};

//     beforeEach(async(() => {
//         TestBed.configureTestingModule({
//             declarations: [BeerListComponent],
//             providers: [BeerService, { provide: AngularFirestore, useValue: angularFirestoreStub }],
//             imports: [RouterTestingModule, MatSnackBarModule, MatDialogModule, SharedModule]
//         }).compileComponents();
//     }));

//     beforeEach(() => {
//         fixture = TestBed.createComponent(BeerListComponent);
//         component = fixture.componentInstance;
//         fixture.detectChanges();
//     });

//     it('should create', () => {
//         expect(component).toBeTruthy();
//     });
// });
