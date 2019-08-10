import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PostService } from 'src/app/services/post.service';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  animations: [
    trigger("enterAnimation", [
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
export class FavoritesComponent implements OnInit {

  posts;

  constructor(private postService: PostService, private _toolbarService: ToolbarService) { }

  ngOnInit() {
    this.posts = this.postService.getPosts();
    this._toolbarService.setTitle('ARK');
  }

}
