import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { NameValidatorResponse } from '../model/NameValidatorResponse';
import { ValidationService } from '../service/validation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public status = '';
  public validated: undefined| NameValidatorResponse = { value: '', content: '' };

  constructor(private _service: ValidationService, private _router: Router) {}


  public sendNameClicked(name: string) {
    if (name.trim() !== '') {
      (this._service
        .validateName(name))
        .pipe(
          catchError((err: any) => {
            this._router.navigate(['error']);
            return throwError(() => err);
          })
        )
        .subscribe((res: NameValidatorResponse) => {
          this.validated = res;
          if (res.value === 'davidView') {
            this._router.navigate(['davidView'], { state: res });
          } else if (res.value === 'halView') {
            this._router.navigate(['halView'], { state: res });
          }
        });
    } else {
      this.status = 'invalidName';
    }
  }
}
