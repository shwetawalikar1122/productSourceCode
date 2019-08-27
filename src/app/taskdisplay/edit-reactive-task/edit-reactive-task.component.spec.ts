import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditReactiveTaskComponent } from './edit-reactive-task.component';

describe('EditReactiveTaskComponent', () => {
  let component: EditReactiveTaskComponent;
  let fixture: ComponentFixture<EditReactiveTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditReactiveTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditReactiveTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
