import { PostService } from './../post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from './../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts : Post[];

  constructor(private postService : PostService) {
  }

  ngOnInit() : void {
    this.postService.GetPosts()
    .subscribe(
      data => {
        this.posts = data;
      },
      err => console.log(err),
      () => console.log(`Done loading posts`)
    );
  }

}
