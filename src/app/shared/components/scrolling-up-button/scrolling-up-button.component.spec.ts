import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollingUpButtonComponent } from './scrolling-up-button.component';

describe('ScrollingUpButtonComponent', () => {
  let component: ScrollingUpButtonComponent;
  let fixture: ComponentFixture<ScrollingUpButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollingUpButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollingUpButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
