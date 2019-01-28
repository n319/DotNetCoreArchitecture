import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestScrollViewerComponent } from './interest-scroll-viewer.component';

describe('InterestScrollViewerComponent', () => {
  let component: InterestScrollViewerComponent;
  let fixture: ComponentFixture<InterestScrollViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestScrollViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestScrollViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
