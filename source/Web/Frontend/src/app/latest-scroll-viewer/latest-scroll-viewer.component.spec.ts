import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestScrollViewerComponent } from './latest-scroll-viewer.component';

describe('LatestScrollViewerComponent', () => {
  let component: LatestScrollViewerComponent;
  let fixture: ComponentFixture<LatestScrollViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestScrollViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestScrollViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
