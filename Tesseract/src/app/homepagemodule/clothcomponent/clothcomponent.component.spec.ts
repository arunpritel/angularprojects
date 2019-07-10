import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothcomponentComponent } from './clothcomponent.component';

describe('ClothcomponentComponent', () => {
  let component: ClothcomponentComponent;
  let fixture: ComponentFixture<ClothcomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothcomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
