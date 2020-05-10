import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/data/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
}
