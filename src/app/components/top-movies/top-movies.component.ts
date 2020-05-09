import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from 'src/app/data/movie';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.scss'],
})
export class TopMoviesComponent implements OnInit {
  movies: Movie[];
  isLoading: boolean = true;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService
      .getTopMovies()
      .pipe(take(1))
      .subscribe((movies) => {
        this.movies = movies;
        this.isLoading = false;
        console.log(this.movies, this.isLoading);
      });
  }
}
