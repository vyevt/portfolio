import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingTableComponent } from './setting-table.component';

describe('SettingTableComponent', () => {
  let component: SettingTableComponent;
  let fixture: ComponentFixture<SettingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SettingTableComponent]
    });
    fixture = TestBed.createComponent(SettingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
