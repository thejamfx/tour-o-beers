import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BeerListComponent } from './beerList/beerList.component';
import { BeerFormComponent } from './beerForm/beerForm.component';
import { BeerDetailComponent } from './beerDetail/beerDetail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, FormsModule, MatStepperModule, MatFormFieldModule, MatInputModule],
  exports: [BeerListComponent],
  declarations: [BeerListComponent, BeerFormComponent, BeerDetailComponent]
})
export class BeerModule { }
