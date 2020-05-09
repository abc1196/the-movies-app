import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { fileTypeValidator } from 'src/app/directives/file-type.directive';
import { FileService } from 'src/app/services/file.service';
import { take } from 'rxjs/operators';
import { MovieService } from 'src/app/services/movie.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss'],
})
export class AddMovieComponent implements OnInit {
  movieForm: FormGroup;

  constructor(
    private fileService: FileService,
    private movieService: MovieService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      release: ['', Validators.required],
      image: [null, [Validators.required, fileTypeValidator()]],
      description: [''],
    });
  }

  ngOnInit(): void {}

  onSubmit(movieData): void {
    console.log(movieData);
    this.fileService
      .setFileToBase64String(movieData.image)
      .pipe(take(1))
      .subscribe((image) => {
        movieData.image = image;
        this.movieService.addMovie(movieData);
        this.messageService.showSuccess('Succesfuly added new movie!');
        this.router.navigate(['/home']);
      });
  }
  onFileChange(event) {
    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      this.movieForm.patchValue({
        image: file,
      });
    } else {
      this.movieForm.patchValue({
        image: null,
      });
    }
  }
}
