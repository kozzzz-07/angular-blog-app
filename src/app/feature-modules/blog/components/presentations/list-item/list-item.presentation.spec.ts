import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemPresentationComponent } from './list-item.presentation';

describe('ListItemPresentationComponent', () => {
  let component: ListItemPresentationComponent;
  let fixture: ComponentFixture<ListItemPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListItemPresentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
