import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CornerstonesComponent } from './cornerstones.component';

describe('CornerstonesComponent', () => {
  let component: CornerstonesComponent;
  let fixture: ComponentFixture<CornerstonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CornerstonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CornerstonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
