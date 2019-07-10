import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartfunctionsComponent } from './cartfunctions.component';

describe('CartfunctionsComponent', () => {
  let component: CartfunctionsComponent;
  let fixture: ComponentFixture<CartfunctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartfunctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartfunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
