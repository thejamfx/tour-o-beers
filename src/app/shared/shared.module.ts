import { NgModule } from '@angular/core';
import { DatatableComponent } from './components/datatable/datatable.component';
import {
    MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatMenuModule, MatSortModule, MatCheckboxModule
} from '@angular/material';
import { NotificationService } from './services/notificationService.service';

@NgModule({
    imports: [
        MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatMenuModule, MatCheckboxModule
    ],
    exports: [DatatableComponent],
    declarations: [DatatableComponent],
    providers: [NotificationService]
})
export class SharedModule { }
