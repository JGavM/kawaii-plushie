import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributorDialogFormComponent } from './distributor-dialog-form.component';

describe('DistributorDialogFormComponent', () => {
  let component: DistributorDialogFormComponent;
  let fixture: ComponentFixture<DistributorDialogFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributorDialogFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributorDialogFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
