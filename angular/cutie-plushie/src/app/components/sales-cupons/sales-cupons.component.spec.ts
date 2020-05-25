import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesCuponsComponent } from './sales-cupons.component';

describe('SalesCuponsComponent', () => {
  let component: SalesCuponsComponent;
  let fixture: ComponentFixture<SalesCuponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesCuponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
