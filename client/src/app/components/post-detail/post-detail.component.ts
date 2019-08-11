import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatBottomSheet } from '@angular/material';
import { CommentComponent } from '../comment/comment.component';
import { StarRatingColor } from './rating/rating.component';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
  animations: [
    trigger("enterAnimation", [
      transition(":enter", [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate("500ms ease-in-out", style({ opacity: 1, transform: 'translateY(0px)' }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 }))
      ])
    ]),
    trigger("fadeAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("500ms ease-in-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("500ms", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class PostDetailComponent implements OnInit, AfterViewInit {
  rating: number = 3;
  starCount: number = 5;
  starColor: StarRatingColor = StarRatingColor.primary;
  starColorP: StarRatingColor = StarRatingColor.primary;
  starColorW: StarRatingColor = StarRatingColor.warn;
  post;
  postId: string;

  constructor(private route: ActivatedRoute, private postService: PostService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.route.params.subscribe(params => { this.postId = params._id; console.log(params._id) })
    this.post = this.postService.getPostById(this.postId);
    console.log(this.post)
    let image = document.getElementById(`trick-img`);

    if (image) {
      document.body.removeChild(image);
      image.style.opacity = "0";
    }






  }

  ngAfterViewInit() {
    let img = document.getElementById(`post-cover-img`);
    let rect = img.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);

  }

  onRatingChanged(rating) {
    console.log(rating);
    this.rating = rating;
  }

  openCommentSection(): void {
    this._bottomSheet.open(CommentComponent, { data: { post: this.post }, panelClass: 'comment-section-radius' })
  }

}
