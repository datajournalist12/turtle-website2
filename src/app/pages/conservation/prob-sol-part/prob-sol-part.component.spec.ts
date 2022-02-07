import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbSolPartComponent } from './prob-sol-part.component';

describe('ProbSolPartComponent', () => {
  let component: ProbSolPartComponent;
  let fixture: ComponentFixture<ProbSolPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProbSolPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbSolPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
