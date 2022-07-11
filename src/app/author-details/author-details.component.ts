import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Author } from './author';
@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css'],
})
export class AuthorDetailsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  @Input() author: Author;
  @Output() select = new EventEmitter<Author>();
  @Output() delete = new EventEmitter<number>();
}
