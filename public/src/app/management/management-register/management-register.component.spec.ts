import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementRegisterComponent } from './management-register.component';

describe('ManagementRegisterComponent', () => {
  let component: ManagementRegisterComponent;
  let fixture: ComponentFixture<ManagementRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
