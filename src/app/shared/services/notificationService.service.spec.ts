import { TestBed, inject } from '@angular/core/testing';

import { NotificationService } from './notificationService.service';
import { MatSnackBarModule } from '@angular/material';

describe('NotificationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [NotificationService],
            imports: [MatSnackBarModule]
        });
    });

    it('should be created', inject([NotificationService], (service: NotificationService) => {
        expect(service).toBeTruthy();
    }));
});
