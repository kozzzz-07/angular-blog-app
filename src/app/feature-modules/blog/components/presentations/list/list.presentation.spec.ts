import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPresentationComponent } from './list.presentation';

describe('ListPresentationComponent', () => {
  let component: ListPresentationComponent;
  let fixture: ComponentFixture<ListPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListPresentationComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

// this.articles$ = of([
//   { id: 'a', title: 'a', excerpt: 'a', createAt: new Date() },
//   { id: 'b', title: 'b', excerpt: 'bbbbbbb', createAt: new Date() },
// ]);
