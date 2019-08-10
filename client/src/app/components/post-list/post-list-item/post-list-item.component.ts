import { Component, OnInit, Input } from '@angular/core';
import { post } from 'selenium-webdriver/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onPostItemSelected() {
    let image = document.getElementById(`post-img_${this.post._id}`);
    let whiteout = document.getElementById('whiteout');
    whiteout.style.opacity = "1";

    if (this.post.image && this.post.type === 'article') {
      let rect = image.getBoundingClientRect();
      // console.log(rect.top, rect.right, rect.bottom, rect.left);
      let trickImage = <HTMLImageElement>document.createElement("IMG");
      trickImage.id = "trick-img";
      trickImage.style.position = "fixed";
      trickImage.style.top = `0`;
      trickImage.style.transform = `translateY(${rect.top}px)`;
      trickImage.style.left = `${rect.left}`;
      trickImage.style.margin = '0px';
      trickImage.style.zIndex = "110";
      trickImage.style.width = "100%";
      trickImage.style.objectFit = "cover";
      trickImage.src = this.post.image;
      trickImage.style.transition = "all 420ms ease";
      trickImage.style.pointerEvents = "none";
      document.body.appendChild(trickImage);
      setTimeout(() => {
        image.style.opacity = "0";
        trickImage.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)"
        trickImage.style.transform = `translateY(56px)`;
        setTimeout(() => {
          this.router.navigate(['post', this.post._id])
        }, 420)
      }, 20)
      console.log(trickImage);
    } else if (this.post.image && (this.post.type === 'book' || this.post.type === 'documentary')) {
      let rect = image.getBoundingClientRect();
      // console.log(rect.top, rect.right, rect.bottom, rect.left);
      let trickImage = <HTMLImageElement>document.createElement("IMG");
      trickImage.id = "trick-img";
      trickImage.style.position = "fixed";
      trickImage.style.top = `0`;
      trickImage.style.transform = `translateY(${rect.top}px)`;
      trickImage.style.left = `${rect.left}`;
      trickImage.style.margin = '0px';
      trickImage.style.zIndex = "110";
      trickImage.style.width = "100%";
      trickImage.style.objectFit = "cover";
      trickImage.src = this.post.image;
      trickImage.style.transition = "all 420ms ease";
      trickImage.style.pointerEvents = "none";
      document.body.appendChild(trickImage);
      setTimeout(() => {
        trickImage.style.width = "25%";
        image.style.opacity = "0";
        trickImage.style.boxShadow = "0 4px 8px 0 rgba(0,0,0,0.2)"
        trickImage.style.transform = `translateY(72px) translateX(16px)`;

        setTimeout(() => {
          this.router.navigate(['post', this.post._id])
        }, 420)
      }, 20)
      console.log(trickImage);
    }



  }

}
