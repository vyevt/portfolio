import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVisitsComponent } from './total-visits.component';

describe('TotalVisitsComponent', () => {
  let component: TotalVisitsComponent;
  let fixture: ComponentFixture<TotalVisitsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalVisitsComponent]
    });
    fixture = TestBed.createComponent(TotalVisitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
