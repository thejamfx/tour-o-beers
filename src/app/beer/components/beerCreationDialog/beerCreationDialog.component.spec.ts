import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerCreationDialogComponent } from './beerCreationDialog.component';

describe('BeerCreationDialogComponent', () => {
  let component: BeerCreationDialogComponent;
  let fixture: ComponentFixture<BeerCreationDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerCreationDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerCreationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
