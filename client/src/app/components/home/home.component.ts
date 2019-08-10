import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
export class HomeComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  navigateTo({ index }) {
    let route;
    switch (index) {
      case 0:
        route = 'feed'
        break;
      case 1:
        route = 'popular'
        break;
      default:
      // code block
    }
    // console.log(index)
    this.router.navigate([`${route}`], { relativeTo: this.route });
  }

  ngOnInit() {
    this.router.navigate([`feed`], { relativeTo: this.route });
  }

}
