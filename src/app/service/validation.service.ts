import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NameValidatorResponse } from '../model/NameValidatorResponse';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {
  constructor(
    private http: HttpClient,
    @Inject('SERVER_URL') private url: String
  ) {}

  public validateName(value: string): Observable<NameValidatorResponse> {
    const body: NameValidatorResponse = { value: value };

    return this.http.post<NameValidatorResponse>(
      `${this.url}/api/v1/validator`,
      body
    );
  }
}
