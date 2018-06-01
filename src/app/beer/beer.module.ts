import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { BeerListComponent } from './components/beerList/beerList.component';
import { BeerFormComponent } from './components/beerForm/beerForm.component';
import { BeerDetailComponent } from './components/beerDetail/beerDetail.component';
import { BeerService } from './services/beerService.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, FormsModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatGridListModule, MatMenuModule, MatTableModule, MatCheckboxModule],
  exports: [BeerListComponent],
  declarations: [BeerListComponent, BeerFormComponent, BeerDetailComponent]
})
export class BeerModule { }
