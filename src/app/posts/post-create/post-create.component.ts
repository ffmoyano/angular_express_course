import {Component, EventEmitter, Output } from '@angular/core';
import {FormsModule, NgForm} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {Post} from '../post.model';
import {NgIf} from '@angular/common';


@Component({
  selector: 'app-post-create',
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    NgIf,

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

  /* DUAL WAY BINDING
  onAddPost() {
    const post: Post = {title: this.enteredTitle, content: this.enteredContent};
    this.postCreated.emit(post);
  }
*/
  onAddPost(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const post: Post = {title: form.value.title, content: form.value.content};
    this.postCreated.emit(post);
  }
}
