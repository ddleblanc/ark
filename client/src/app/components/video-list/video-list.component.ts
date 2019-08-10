import { Component, OnInit } from '@angular/core';
import { distanceInWordsToNow, subDays } from 'date-fns'

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  date = distanceInWordsToNow(subDays(new Date(), 3), { addSuffix: true })
  vids = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor() { }

  ngOnInit() {
  }

}
