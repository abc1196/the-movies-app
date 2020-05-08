import { Component, OnInit, Input, Output } from '@angular/core';
import { Movie } from 'src/app/data/movie';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[];
  @Output() selectMovie: EventEmitter;
  @Output() deleteMovie: EventEmitter;

  constructor() {}

  ngOnInit(): void {}
}
