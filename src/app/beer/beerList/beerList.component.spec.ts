import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerListComponent } from './beerList.component';

describe('BeerListComponent', () => {
    let component: BeerListComponent;
    let fixture: ComponentFixture<BeerListComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [BeerListComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BeerListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
