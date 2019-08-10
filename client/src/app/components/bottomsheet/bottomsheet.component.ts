import { Component, OnInit } from '@angular/core';
import { SortService } from 'src/app/services/sort.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottomsheet',
  templateUrl: './bottomsheet.component.html',
  styleUrls: ['./bottomsheet.component.scss']
})
export class BottomsheetComponent implements OnInit {

  constructor(private _sortService: SortService, private _bottomSheet: MatBottomSheet) { }

  ngOnInit() {
  }

  setFeedSort(sort) {
    this._sortService.setFeedSort(sort);
    this._bottomSheet.dismiss()
  }

}
