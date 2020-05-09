import { Injectable } from '@angular/core';
import { Movie } from '../data/movie';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movies: Movie[] = [
    {
      title: 'Avengers Endgame',
      release: new Date(),
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: '',
    },
    {
      title: 'Avengers Endgame',
      release: new Date(),
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      description: '',
    },
  ];
  constructor() {}

  getMovies(): Movie[] {
    return this.movies;
  }

  addMovie(movie: Movie): Movie {
    this.movies.push(movie);
    return movie;
  }

  deleteMovie(index: number): void {
    this.movies.splice(index, 1);
  }
}
