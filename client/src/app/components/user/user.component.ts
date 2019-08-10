import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router, ActivatedRoute } from '@angular/router';
import { ToolbarService } from 'src/app/services/toolbar.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
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
export class UserComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private _toolbarService: ToolbarService) { }

  ngOnInit() {
    this.router.navigate([`videos`], { relativeTo: this.route });
    this._toolbarService.setTitle('DAYZ OF NOAH');
  }

  private selectedTab = 0;
  tabs = 3;

  private swipeCoord?: [number, number];
  private swipeTime?: number;

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
            if (this.selectedTab < 3) {
              this.selectedTab++;
            }
            break;
          case 'previous':
            if (this.selectedTab > 0) {
              this.selectedTab--;
            }

            break;
          default:
          // code block
        }
      }
    }
  }

  navigateTo({ index }) {
    let route;
    switch (index) {
      case 0:
        route = 'documentaries'
        break;
      case 1:
        route = 'articles'
        break;
      case 2:
        route = 'books'
        break;
      case 3:
        route = 'files'
        break;
      default:
      // code block
    }
    // console.log(index)
    this.router.navigate([`${route}`], { relativeTo: this.route });
  }

}
