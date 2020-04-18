import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSalesComponent } from './management-sales.component';

describe('ManagementSalesComponent', () => {
  let component: ManagementSalesComponent;
  let fixture: ComponentFixture<ManagementSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
