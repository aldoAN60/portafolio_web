import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSliderComponent } from './project-slider.component';

describe('ProjectSliderComponent', () => {
  let component: ProjectSliderComponent;
  let fixture: ComponentFixture<ProjectSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectSliderComponent]
    });
    fixture = TestBed.createComponent(ProjectSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
