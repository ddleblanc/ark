import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailSummaryComponent } from './post-detail-summary.component';

describe('PostDetailSummaryComponent', () => {
  let component: PostDetailSummaryComponent;
  let fixture: ComponentFixture<PostDetailSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
