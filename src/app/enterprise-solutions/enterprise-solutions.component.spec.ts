import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSolutionsComponent } from './enterprise-solutions.component';

describe('EnterpriseSolutionsComponent', () => {
  let component: EnterpriseSolutionsComponent;
  let fixture: ComponentFixture<EnterpriseSolutionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EnterpriseSolutionsComponent]
    });
    fixture = TestBed.createComponent(EnterpriseSolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
