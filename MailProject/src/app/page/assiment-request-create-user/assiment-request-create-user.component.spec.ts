import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssimentRequestCreateUserComponent } from './assiment-request-create-user.component';

describe('AssimentRequestCreateUserComponent', () => {
  let component: AssimentRequestCreateUserComponent;
  let fixture: ComponentFixture<AssimentRequestCreateUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssimentRequestCreateUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssimentRequestCreateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
