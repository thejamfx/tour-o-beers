import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule, MatToolbarModule, MatIconModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule, MatButtonModule, MatToolbarModule, MatIconModule
  ],
  exports: [NavbarComponent],
  declarations: [NavbarComponent]
})
export class NavbarModule { }
