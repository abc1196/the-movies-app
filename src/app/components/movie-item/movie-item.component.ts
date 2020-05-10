import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Movie } from 'src/app/data/movie';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss'],
})
export class MovieItemComponent implements OnInit {
  @Input() movie: Movie;
  @Input() selected: boolean;
  @Output() selectMovie: EventEmitter<any> = new EventEmitter();
  @Output() deleteMovie: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
