import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementSuppliersComponent } from './management-suppliers.component';

describe('ManagementSuppliersComponent', () => {
  let component: ManagementSuppliersComponent;
  let fixture: ComponentFixture<ManagementSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
