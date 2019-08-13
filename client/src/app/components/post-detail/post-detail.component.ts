import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  private selectedTab;
  private swipeCoord?: [number, number];
  private swipeTime?: number;
  prevIndex = 0;
  curIndex;
  currentVideo;
  videoTitle = "Big Bunny"

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.router.navigate([`review`], { relativeTo: this.route });
    this.route.params.subscribe(params => { this.postId = params._id; console.log(params._id) })
    this.post = this.postService.getPostById(this.postId);
    console.log(this.post)
    let image = document.getElementById(`trick-img`);

    if (image) {
      document.body.removeChild(image);
      image.style.opacity = "0";
    }



  }



  swipe(e: TouchEvent, when: string): void {
    const coord: [number, number] = [e.changedTouches[0].clientX, e.changedTouches[0].clientY];
    const time = new Date().getTime();

    if (when === 'start') {
      this.swipeCoord = coord;
      this.swipeTime = time;
    } else if (when === 'end') {
      const direction = [coord[0] - this.swipeCoord[0], coord[1] - this.swipeCoord[1]];
      const duration = time - this.swipeTime;

      if (duration < 1000 //
        && Math.abs(direction[0]) > 30 // Long enough
        && Math.abs(direction[0]) > Math.abs(direction[1] * 3)) { // Horizontal enough
        const swipe = direction[0] < 0 ? 'next' : 'previous';
        // Do whatever you want with swipe
        switch (swipe) {
          case 'next':
            this.selectedTab = 1;
            break;
          case 'previous':
            this.selectedTab = 0;
            break;
          default:
          // code block
        }
      }
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

  navigateTo({ index }) {
    let route;
    switch (index) {
      case 0:
        route = 'review'
        break;
      case 1:
        route = 'summary'
        break;
      default:
      // code block
    }
    // console.log(index)
    this.router.navigate([`${route}`], { relativeTo: this.route });
  }

  switchPlayback(i) {
    let videos = document.querySelectorAll(".swiper-slide");
    console.log(i)
    let previousVideo = <HTMLVideoElement>videos[this.prevIndex];
    previousVideo.pause()
    this.currentVideo = <HTMLVideoElement>videos[i];
    this.currentVideo.play()
    this.prevIndex = i;
    switch (i) {
      case 0:
        this.videoTitle = 'Big Bunny'
        break;
      case 1:
        this.videoTitle = 'Pokemon'
        break;
      default:
      // code block
    }
  }
  openFullscreen() {
    if (this.currentVideo.requestFullscreen) {
      this.currentVideo.requestFullscreen();
    } else if (this.currentVideo.mozRequestFullScreen) { /* Firefox */
      this.currentVideo.mozRequestFullScreen();
    } else if (this.currentVideo.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      this.currentVideo.webkitRequestFullscreen();
    } else if (this.currentVideo.msRequestFullscreen) { /* IE/Edge */
      this.currentVideo.msRequestFullscreen();
    }
  }

}
