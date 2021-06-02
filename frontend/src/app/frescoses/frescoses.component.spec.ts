import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrescosesComponent } from './frescoses.component';

describe('FrescosesComponent', () => {
  let component: FrescosesComponent;
  let fixture: ComponentFixture<FrescosesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrescosesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrescosesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
