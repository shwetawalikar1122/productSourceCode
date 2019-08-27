import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupreactivedemoComponent } from './signupreactivedemo.component';

describe('SignupreactivedemoComponent', () => {
  let component: SignupreactivedemoComponent;
  let fixture: ComponentFixture<SignupreactivedemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupreactivedemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupreactivedemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
