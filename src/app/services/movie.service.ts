import { Injectable } from '@angular/core';
import { Movie } from '../data/movie';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { MessageService } from './message.service';
import { MoviesWrapper } from '../data/moviesWrapper';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  topMoviesUrl: string = 'http://www.mocky.io/v2/5dc3c053300000540034757b';

  movie$: Subject<Movie> = new Subject<Movie>();

  movies: Movie[] = [
    {
      title: 'Avengers Endgame',
      release: new Date(),
      image:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: '',
    },
    {
      title: 'Avengers Endgame',
      release: new Date(),
      image:
        'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg',
      description: '',
    },
  ];

  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

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
      catchError(this.handleError<Movie[]>('getHeroes', []))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.messageService.showError(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
