import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

/**
 * Base service class that provides common functionality for all services
 */
@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {
  protected readonly apiUrl: string;

  constructor(
    protected readonly http: HttpClient,
    protected readonly endpoint: string
  ) {
    this.apiUrl = `${environment.apiUrl}/${endpoint}`;
  }

  /**
   * Handles HTTP errors and provides consistent error handling across services
   * @param error The HTTP error response
   * @returns An observable that emits the error
   */
  protected handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'An error occurred';
    
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = error.error.message;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }

  /**
   * Generic method to handle HTTP requests with error handling
   * @param request The HTTP request observable
   * @returns The HTTP response observable with error handling
   */
  protected handleRequest<T>(request: Observable<T>): Observable<T> {
    return request.pipe(
      catchError(this.handleError)
    );
  }
} 