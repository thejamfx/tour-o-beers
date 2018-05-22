import { NgModule } from '@angular/core';
import { DatatableComponent } from './datatable/datatable.component';
import { MatTableModule, MatPaginatorModule } from '@angular/material';

@NgModule({
  imports: [
    MatTableModule, MatPaginatorModule
  ],
  exports: [DatatableComponent],
  declarations: [DatatableComponent]
})
export class SharedModule { }
