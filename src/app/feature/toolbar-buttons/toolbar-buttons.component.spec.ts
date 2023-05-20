import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarButtonsComponent } from './toolbar-buttons.component';

describe('ToolbarButtonsComponent', () => {
  let component: ToolbarButtonsComponent;
  let fixture: ComponentFixture<ToolbarButtonsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarButtonsComponent]
    });
    fixture = TestBed.createComponent(ToolbarButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
