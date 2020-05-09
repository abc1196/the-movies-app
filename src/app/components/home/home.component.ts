import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/data/movie';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedMovie: Movie;
  movies: Movie[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }

  onSelectMovie(movie: Movie): void {
    console.log('onSelectMovie', movie);
    this.selectedMovie = movie;
  }

  onDeleteMovie(index: number): void {
    console.log('onDeleteMovie', index);
    this.movieService.deleteMovie(index);
  }
}
