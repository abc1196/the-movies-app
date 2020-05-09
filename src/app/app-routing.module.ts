import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AddMovieComponent } from './components/add-movie/add-movie.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add', component: AddMovieComponent },
  { path: 'top', component: TopMoviesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
