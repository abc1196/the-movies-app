import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/data/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  @Input() movies: Movie[];
  selectedMovie: Movie;
  subscription: Subscription;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieService
      .getMovie()
      .subscribe((movie) => (this.selectedMovie = movie));
  }

  onSelectMovie(movie: Movie): void {
    this.movieService.setMovie(movie);
  }

  onDeleteMovie(index: number): void {
    this.movieService.deleteMovie(index);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
