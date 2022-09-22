import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalViewComponent } from './hal-view.component';

describe('HalViewComponent', () => {
  let component: HalViewComponent;
  let fixture: ComponentFixture<HalViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HalViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HalViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
