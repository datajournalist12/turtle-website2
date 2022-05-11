import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeglectComponent } from './neglect.component';

describe('NeglectComponent', () => {
  let component: NeglectComponent;
  let fixture: ComponentFixture<NeglectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeglectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeglectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
