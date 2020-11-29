
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPresentationComponent } from './new.presentation';

describe('NewPresentationComponent', () => {
  let component: NewPresentationComponent;
  let fixture: ComponentFixture<NewPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
