import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
    constructor (private matSnackBar: MatSnackBar) {}
    public addNotification (message: string, snackBarActionLabel: string = ''): void {
        const snackBarOptions = this.buildSnackBarOptions();
        setTimeout(() => this.matSnackBar.open(message, snackBarActionLabel, snackBarOptions));
    }
    private buildSnackBarOptions (): MatSnackBarConfig {
        return {
            horizontalPosition: 'right',
            verticalPosition: 'bottom',
            duration: 3000
        };
    }
}
