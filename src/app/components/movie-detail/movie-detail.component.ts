import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/data/movie';
import { MovieService } from 'src/app/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  subscription: Subscription;
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.subscription = this.movieService
      .getMovie()
      .subscribe((movie) => (this.movie = movie));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
