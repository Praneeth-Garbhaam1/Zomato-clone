import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationComponentComponent } from './location-component.component';

describe('LocationComponentComponent', () => {
  let component: LocationComponentComponent;
  let fixture: ComponentFixture<LocationComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationComponentComponent]
    });
    fixture = TestBed.createComponent(LocationComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
