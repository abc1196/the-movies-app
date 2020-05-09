import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/data/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() deleteMovie: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
