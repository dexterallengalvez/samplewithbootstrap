import { PostService } from './post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ PostListComponent ],
  providers: [ PostService ]
})
export class PostModule { }
