import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileService {
  constructor() {}

  setFileToBase64String(file: File): Observable<string> {
    let base64Observable = new ReplaySubject<string>(1);

    const fileReader = new FileReader();
    fileReader.onload = () => {
      base64Observable.next(fileReader.result as string);
    };
    fileReader.readAsDataURL(file);

    return base64Observable;
  }
}
