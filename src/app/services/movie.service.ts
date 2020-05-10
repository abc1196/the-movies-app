import { Injectable } from '@angular/core';
import { Movie } from '../data/movie';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { MoviesWrapper } from '../data/moviesWrapper';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  topMoviesUrl: string = 'http://www.mocky.io/v2/5dc3c053300000540034757b';

  movie$: Subject<Movie> = new Subject<Movie>();

  movies: Movie[] = [];

  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getMovie(): Observable<Movie> {
    return this.movie$.asObservable();
  }

  setMovie(movie: Movie): void {
    this.movie$.next(movie);
  }

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

  getTopMovies(): Observable<Movie[]> {
    return this.http.get<MoviesWrapper>(this.topMoviesUrl).pipe(
      map((response) => response.movies),
      catchError(this.errorService.handleError<Movie[]>('get Top Movies', []))
    );
  }
}
