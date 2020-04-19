import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPasswordchangeComponent } from './management-passwordchange.component';

describe('ManagementPasswordchangeComponent', () => {
  let component: ManagementPasswordchangeComponent;
  let fixture: ComponentFixture<ManagementPasswordchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagementPasswordchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagementPasswordchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
