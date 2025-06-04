import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TableauService {
  private readonly TOKEN_KEY = 'tableau_token';
  private readonly TOKEN_EXPIRY_KEY = 'tableau_token_expiry';

  constructor(private http: HttpClient) {}

  getToken(): Observable<string> {
    const token = localStorage.getItem(this.TOKEN_KEY);
    const expiry = localStorage.getItem(this.TOKEN_EXPIRY_KEY);

    if (token && expiry && new Date(expiry) > new Date()) {
      return of(token);
    }

    return this.refreshToken();
  }

  private refreshToken(): Observable<string> {
    // TODO: Replace with actual token endpoint
    return this.http.post<{ token: string, expiresIn: number }>('/api/tableau/token', {})
      .pipe(
        map(response => {
          const expiryDate = new Date();
          expiryDate.setSeconds(expiryDate.getSeconds() + response.expiresIn);
          
          localStorage.setItem(this.TOKEN_KEY, response.token);
          localStorage.setItem(this.TOKEN_EXPIRY_KEY, expiryDate.toISOString());
          
          return response.token;
        }),
        catchError(error => {
          console.error('Error refreshing Tableau token:', error);
          throw error;
        })
      );
  }

  clearToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem(this.TOKEN_EXPIRY_KEY);
  }
} 