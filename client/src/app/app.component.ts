import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";
import { ToolbarService } from './services/toolbar.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger("bottomNavEnterAnimation", [
      transition(":enter", [
        style({ transform: "translateY(70px)", opacity: 0 }),
        animate(
          "320ms ease-in-out",
          style({ transform: "translateY(0px)", opacity: 1 })
        )
      ]),
      transition(":leave", [
        style({ transform: "translateY(0px)", opacity: 1 }),
        animate("420ms", style({ transform: "translateY(70px)", opacity: 0 }))
      ])
    ]),
  ]
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
