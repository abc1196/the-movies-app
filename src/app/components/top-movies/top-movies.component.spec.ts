import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMoviesComponent } from './top-movies.component';
import { Movie } from 'src/app/data/movie';
import { of, Observable } from 'rxjs';
import { MovieService } from 'src/app/services/movie.service';
import { DebugElement } from '@angular/core';

describe('TopMoviesComponent', () => {
  let component: TopMoviesComponent;
  let fixture: ComponentFixture<TopMoviesComponent>;
  let movies: Movie[];
  let getTopMoviesSpy: Observable<Movie[]>;

  describe('Test isLoading Flag', () => {
    beforeEach(() => {
      movies = [];
      // Create a fake TwainService object with a `getTopMovies()` spy
      const movieService = jasmine.createSpyObj('MovieService', [
        'getTopMovies',
      ]);
      // Make the spy return a synchronous Observable with the test data
      getTopMoviesSpy = movieService.getTopMovies.and.returnValue(of(movies));

      TestBed.configureTestingModule({
        declarations: [TopMoviesComponent],
        providers: [{ provide: MovieService, useValue: movieService }],
      }).compileComponents();
    });

    it('should create', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should have isLoading flag to true after construction', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      expect(component.isLoading).toBeTrue();
    });

    it('should have isLoading flag to false after onInit', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component.isLoading).toBeFalse();
    });
  });

  describe('Test with empty movies', () => {
    beforeEach(() => {
      movies = [];
      // Create a fake TwainService object with a `getTopMovies()` spy
      const movieService = jasmine.createSpyObj('MovieService', [
        'getTopMovies',
      ]);
      // Make the spy return a synchronous Observable with the test data
      getTopMoviesSpy = movieService.getTopMovies.and.returnValue(of(movies));

      TestBed.configureTestingModule({
        declarations: [TopMoviesComponent],
        providers: [{ provide: MovieService, useValue: movieService }],
      }).compileComponents();
    });

    it('should create', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should contain "There are no top movies. Try again!"', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLElement = bannerDe.nativeElement;
      expect(bannerEl.textContent).toContain(
        'There are no top movies. Try again!'
      );
    });
  });

  describe('Test with populated movies', () => {
    beforeEach(() => {
      movies = [
        {
          title: 'Avengers',
          release: new Date(),
          image: 'image',
          description: '',
        },
        {
          title: 'The Hobbit',
          release: new Date(),
          image: 'image',
          description: '',
        },
        {
          title: 'Reservoir Dogs',
          release: new Date(),
          image: 'image',
          description: '',
        },
      ];

      // Create a fake TwainService object with a `getTopMovies()` spy
      const movieService = jasmine.createSpyObj('MovieService', [
        'getTopMovies',
      ]);
      // Make the spy return a synchronous Observable with the test data
      getTopMoviesSpy = movieService.getTopMovies.and.returnValue(of(movies));

      TestBed.configureTestingModule({
        declarations: [TopMoviesComponent],
        providers: [{ provide: MovieService, useValue: movieService }],
      }).compileComponents();
    });

    it('should create', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      expect(component).toBeTruthy();
    });

    it('should contain Three Mat Card Selectors', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLElement = bannerDe.nativeElement;
      const matCardsMovies = bannerEl.querySelectorAll('mat-card');
      expect(matCardsMovies.length).toEqual(3);

      matCardsMovies.forEach((card, index) =>
        expect(card.textContent.includes(movies[index].title)).toBeTrue()
      );
    });

    it('should contain Three Mat Card Selectors with Movie titles', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLElement = bannerDe.nativeElement;
      const matCardsMovies = bannerEl.querySelectorAll('mat-card');

      matCardsMovies.forEach((card, index) =>
        expect(card.textContent.includes(movies[index].title)).toBeTrue()
      );
    });

    it('should format Movie release date with format "MM/dd/YYYY"', () => {
      fixture = TestBed.createComponent(TopMoviesComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
      const bannerDe: DebugElement = fixture.debugElement;
      const bannerEl: HTMLElement = bannerDe.nativeElement;
      const matCardsMovies = bannerEl.querySelectorAll('mat-card');
      const dateLocaleOptions = {
        year: 'numeric',
        month: '2-digit',
        day: 'numeric',
      };

      matCardsMovies.forEach((card, index) => {
        console.log(
          card.getElementsByTagName('mat-card-subtitle'),
          movies[index].release.toLocaleDateString('en-US', dateLocaleOptions)
        );
        const subtitle = card.getElementsByTagName('mat-card-subtitle');
        expect(subtitle).toBeTruthy();

        const dateMessage = `Release date: ${movies[
          index
        ].release.toLocaleDateString('en-US', dateLocaleOptions)}`;
        expect(subtitle[0].textContent.includes(dateMessage)).toBeTrue();
      });
    });
  });
});
