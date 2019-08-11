import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  userId = "1";
  comments;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public post: any) { }

  ngOnInit() {
    this.comments = this.post.post.comments;
    console.log(this.post)
    let input = document.getElementById('comment-input');
    input.dispatchEvent(this.clickEvent);
  }

  clickEvent = new MouseEvent("click", {
    "view": window,
    "bubbles": true,
    "cancelable": false
  });


}
