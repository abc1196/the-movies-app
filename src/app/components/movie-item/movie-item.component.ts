import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Movie } from 'src/app/data/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() index: number;
  @Input() selectMovie: EventEmitter<any>;
  @Input() deleteMovie: EventEmitter<any>;

  constructor() {}

  ngOnInit(): void {}
}
