import { TestBed, inject } from '@angular/core/testing';

import { BeerModalService } from './beerModalService.service';
import { MatDialogModule } from '@angular/material';

describe('BeerModalServiceService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [BeerModalService],
            imports: [MatDialogModule]
        });
    });

    it('should be created', inject([BeerModalService], (service: BeerModalService) => {
        expect(service).toBeTruthy();
    }));
});
