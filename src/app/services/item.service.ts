import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Item } from '../Models/item-model';



@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiURL = "https://sportshopbackend-production.up.railway.app/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.apiURL + '/items')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getItem(id: string | number): Observable<Item> {
    return this.httpClient.get<Item>(this.apiURL + '/items/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createItem(items: any): Observable<Item> {
    return this.httpClient.post<Item>(this.apiURL + '/items/', JSON.stringify(items), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateItem(id: string | number,items: any): Observable<Item> {
    return this.httpClient.put<Item>(this.apiURL + '/items/' + id, JSON.stringify(items), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteItem(id: string | number) {
    return this.httpClient.delete<Item>(this.apiURL + '/items/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }


  
  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
