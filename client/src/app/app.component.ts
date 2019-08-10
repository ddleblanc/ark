import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ToolbarService } from './services/toolbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private title;

  constructor(private router: Router, private location: Location, private _toolbarService: ToolbarService) {

  }

  ngOnInit() {
    this._toolbarService.currentTitle$.subscribe(title => {
      this.title = title
    })
  }




  navigateTo({ index }) {
    let route;
    switch (index) {
      case 0:
        route = 'home'
        break;
      case 1:
        route = 'discover'
        break;
      case 2:
        route = 'create'
        break;
      case 3:
        route = 'favorites'
        break;
      case 4:
        route = 'messages'
        break;
      default:
      // code block .
    }
    // console.log(index)
    this.router.navigate([`/${route}`]);
  }
  onBackClicked() {

    this.location.back();

  }
  isPostRoute(value: string): boolean {
    return /^\/post(\/|$)/.test(value);
  }
  isUserRoute(value: string): boolean {
    return /^\/user(\/|$)/.test(value);
  }
}
