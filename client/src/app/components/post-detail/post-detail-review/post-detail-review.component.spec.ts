import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetailReviewComponent } from './post-detail-review.component';

describe('PostDetailReviewComponent', () => {
  let component: PostDetailReviewComponent;
  let fixture: ComponentFixture<PostDetailReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostDetailReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
