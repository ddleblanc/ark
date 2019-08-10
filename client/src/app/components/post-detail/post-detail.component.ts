import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, style, animate } from '@angular/animations';

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
    ])
  ]
})
export class PostDetailComponent implements OnInit {

  post;
  postId: string;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.route.params.subscribe(params => { this.postId = params._id; console.log(params._id) })
    this.post = this.postService.getPostById(this.postId);
    console.log(this.post)
    let image = document.getElementById(`trick-img`);

    if (image) {
      document.body.removeChild(image);
      image.style.opacity = "0";
    }

  }

}
