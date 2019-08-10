import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { PostService } from 'src/app/services/post.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomsheetComponent } from '../../bottomsheet/bottomsheet.component';
import { SortService } from 'src/app/services/sort.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss'],
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
export class FeedComponent implements OnInit {
  posts;
  sortby = "New";

  constructor(private postService: PostService, private _sortService: SortService, private _bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomsheetComponent);
  }

  ngOnInit() {
    this._sortService.currentSort$.subscribe(sort => {
      this.sortby = sort
      console.log("YEAAAAH BWOOOY " + this.sortby)
    })
    this.posts = this.postService.getPosts()
  }

}
