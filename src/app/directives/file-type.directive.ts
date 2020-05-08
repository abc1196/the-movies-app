import { AbstractControl, ValidatorFn } from '@angular/forms';

// https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types
const fileTypes = [
  'image/apng',
  'image/bmp',
  'image/gif',
  'image/jpeg',
  'image/pjpeg',
  'image/png',
  'image/svg+xml',
  'image/tiff',
  'image/webp',
  'image/x-icon',
];

/** A file's type hast to match the given file types */
export function fileTypeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (control.value !== null) {
      const fileType = !fileTypes.includes(control.value.type);
      return fileType ? { fileType: { value: control.value } } : null;
    } else {
      return null;
    }
  };
}
