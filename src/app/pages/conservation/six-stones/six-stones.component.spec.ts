import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixStonesComponent } from './six-stones.component';

describe('SixStonesComponent', () => {
  let component: SixStonesComponent;
  let fixture: ComponentFixture<SixStonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixStonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SixStonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
