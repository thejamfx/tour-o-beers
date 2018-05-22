import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatStepperModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { BeerDetailsComponent } from './beerDetails/beerDetails.component';

@NgModule({
  imports: [CommonModule, FormsModule, MatStepperModule, MatFormFieldModule, MatInputModule],
  exports: [BeerDetailsComponent],
  declarations: [BeerDetailsComponent]
})
export class BeerModule { }
