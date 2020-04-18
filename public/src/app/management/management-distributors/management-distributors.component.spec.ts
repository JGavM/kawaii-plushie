import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDistributorsComponent } from './management-distributors.component';

describe('ManagementDistributorsComponent', () => {
  let component: ManagementDistributorsComponent;
  let fixture: ComponentFixture<ManagementDistributorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementDistributorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementDistributorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
