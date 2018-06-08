import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './components/datatable/datatable.component';
import {
    MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatMenuModule, MatSortModule, MatCheckboxModule
} from '@angular/material';
import { NotificationService } from './services/notificationService.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
    imports: [
        CommonModule, MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatMenuModule, MatCheckboxModule
    ],
    exports: [DatatableComponent, SpinnerComponent],
    declarations: [DatatableComponent, SpinnerComponent],
    providers: [NotificationService]
})
export class SharedModule { }
