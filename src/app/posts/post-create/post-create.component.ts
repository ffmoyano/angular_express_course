import {Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Post} from '../post.model';


@Component({
  selector: 'app-post-create',
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,

  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  enteredTitle: string = "";
  enteredContent: string = "";
  @Output() postCreated: EventEmitter<Post> = new EventEmitter();

  //onAddPost(postInput: HTMLTextAreaElement) {
  //  this.newPost = postInput.value;
  //}
  onAddPost() {
    const post: Post = {title: this.enteredTitle, content: this.enteredContent};
    this.postCreated.emit(post);
  }
}
