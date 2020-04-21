import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierDialogFormComponent } from './supplier-dialog-form.component';

describe('SupplierDialogFormComponent', () => {
  let component: SupplierDialogFormComponent;
  let fixture: ComponentFixture<SupplierDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupplierDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
