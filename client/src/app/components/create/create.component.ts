import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { ToolbarService } from 'src/app/services/toolbar.service';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
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
export class CreateComponent implements OnInit {

  file: File = null;
  url: String;
  data: any;
  img: string;

  constructor(private _toolbarService: ToolbarService, private _postService: PostService) { }

  ngOnInit() {
    this._toolbarService.setTitle('ARK');
    this.getPost()
  }

  onFileSelected(event) {
    this.file = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();

      reader.readAsDataURL(event.target.files[0]); // read file as data url

      reader.onload = (event: any) => {
        // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }
  onPostSubmit() {
    const fd = new FormData();
    fd.append("file", this.file, this.file.name);
    const meta = {
      username: 'dayz',
      filetype: 'photo'
    };
    fd.append("meta", JSON.stringify(meta));
    // console.log(post)
    // Required fields
    // if (!this.validateService.validatePost(post)) {
    //   // this.flashMessage.show('Please fill in all fields', { cssClass: 'alert-danger', timeout: 3000 });
    //   console.log("Fill in all fields");
    //   return false;
    // } else {
    //Post post
    this._postService.addPost(fd).subscribe(data => {
      this.data = data;
      if (this.data.success) {
        // this._postService.setCurrentPostUrl(this.data.createdPost.photo)
        // this.router.navigate(['post', this.data.createdPost._id])
        // this.flashMessage.show('Posted', {cssClass: 'alert-success', timeout: 3000});
        // this.router.navigate(['/'])
        console.log('yesss')
      } else {
        // this.router.navigate(['/'])
        console.log("oh no no no ");
      }
    });
    // }
  }

  async getPost() {
    this.data = await this._postService.getAllPosts(
    )
    this.img = this.data.dir;
    console.log(this.data)
    // if (this.data.success) {

    // }
    // else if (!this.data.success) {
    //   console.log("hierdoor doet ie het niet" + this.data.msg)
    //   // this.router.navigate(['/'])
    // }

  }

}
