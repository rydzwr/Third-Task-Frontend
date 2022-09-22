import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DavidViewComponent } from './david-view.component';

describe('DavidViewComponent', () => {
  let component: DavidViewComponent;
  let fixture: ComponentFixture<DavidViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DavidViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DavidViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
