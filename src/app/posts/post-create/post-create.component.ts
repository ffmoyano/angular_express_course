import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-post-create',
  imports: [
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ],
  templateUrl: './post-create.component.html',
  styleUrl: './post-create.component.css'
})
export class PostCreateComponent {
  enteredValue: string = "";
  newPost: string = 'No content';

  //onAddPost(postInput: HTMLTextAreaElement) {
  //  this.newPost = postInput.value;
  //}
  onAddPost() {
    this.newPost = this.enteredValue;
  }
}
