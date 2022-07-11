import { Component, OnInit } from '@angular/core';
import { Author, authors } from './author';
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css'],
})
export class AuthorListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  authors = [
    {
      id: 1,
      firstName: 'heea',
      lastName: 'daw',
    },
    {
      id: 2,
      firstName: 'heddawdea',
      lastName: 'dadaw',
    },
    {
      id: 3,
      firstName: 'dawdaw',
      lastName: 'dgrteghaw',
    },
  ];
  currentAuthor: Author = authors[0];
  onSelected(author: Author) {
    this.currentAuthor = author;
  }
  onDelete(id: number) {
    this.authors = this.authors.filter((x) => x.id != id);
    if (this.currentAuthor.id == id) {
      this.currentAuthor = this.authors[0];
    }
  }
}
