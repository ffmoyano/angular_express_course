import {Component, Input} from '@angular/core';
import {
  MatAccordion,
  MatExpansionModule,

} from '@angular/material/expansion';
import {NgForOf, NgIf} from '@angular/common';
import {Post} from '../post.model';

@Component({
  selector: 'app-post-list',
  imports: [
    MatAccordion,
    MatExpansionModule,
    NgForOf,
    NgIf,
  ],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css'
})
export class PostListComponent {
  @Input() posts: Post[] = [];
}
