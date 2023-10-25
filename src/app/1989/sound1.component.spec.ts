import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sound1Component } from './sound1.component';

describe('Sound1Component', () => {
  let component: Sound1Component;
  let fixture: ComponentFixture<Sound1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sound1Component]
    });
    fixture = TestBed.createComponent(Sound1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
