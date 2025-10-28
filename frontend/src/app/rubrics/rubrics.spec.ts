import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rubrics } from './rubrics';

describe('Rubrics', () => {
  let component: Rubrics;
  let fixture: ComponentFixture<Rubrics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rubrics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rubrics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
