import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomElementComponent } from './my-custom-element.component';

describe('MyCustomElementComponent', () => {
  let component: MyCustomElementComponent;
  let fixture: ComponentFixture<MyCustomElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCustomElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCustomElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
