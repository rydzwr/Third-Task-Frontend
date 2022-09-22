import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasterEggErrorComponent } from './easter-egg-error.component';

describe('EasterEggErrorComponent', () => {
  let component: EasterEggErrorComponent;
  let fixture: ComponentFixture<EasterEggErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasterEggErrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasterEggErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
