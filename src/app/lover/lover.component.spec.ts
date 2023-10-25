import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoverComponent } from './lover.component';

describe('LoverComponent', () => {
  let component: LoverComponent;
  let fixture: ComponentFixture<LoverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoverComponent]
    });
    fixture = TestBed.createComponent(LoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
