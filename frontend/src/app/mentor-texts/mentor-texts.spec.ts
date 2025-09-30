import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorTexts } from './mentor-texts';

describe('MentorTexts', () => {
  let component: MentorTexts;
  let fixture: ComponentFixture<MentorTexts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MentorTexts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MentorTexts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
