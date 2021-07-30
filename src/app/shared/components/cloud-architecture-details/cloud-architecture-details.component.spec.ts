import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudArchitectureDetailsComponent } from './cloud-architecture-details.component';

describe('CloudArchitectureDetailsComponent', () => {
  let component: CloudArchitectureDetailsComponent;
  let fixture: ComponentFixture<CloudArchitectureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloudArchitectureDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudArchitectureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
