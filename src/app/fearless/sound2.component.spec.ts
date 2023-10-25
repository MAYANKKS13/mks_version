import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sound2Component } from './sound2.component';

describe('Sound2Component', () => {
  let component: Sound2Component;
  let fixture: ComponentFixture<Sound2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Sound2Component]
    });
    fixture = TestBed.createComponent(Sound2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
