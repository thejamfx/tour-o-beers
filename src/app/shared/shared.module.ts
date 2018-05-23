import { NgModule } from '@angular/core';
import { DatatableComponent } from './components/datatable/datatable.component';
import {
    MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatMenuModule, MatSortModule, MatCheckboxModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule, MatTableModule, MatIconModule, MatPaginatorModule, MatMenuModule, MatCheckboxModule
    ],
    exports: [DatatableComponent],
    declarations: [DatatableComponent]
})
export class SharedModule { }
