import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreOptionsComponent } from './explore-options.component';

describe('ExploreOptionsComponent', () => {
  let component: ExploreOptionsComponent;
  let fixture: ComponentFixture<ExploreOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExploreOptionsComponent]
    });
    fixture = TestBed.createComponent(ExploreOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
