import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Order } from '../Models/order-model'; 

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private apiURL = "https://sportshopbackend-production.up.railway.app/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiURL + '/orders')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getOrder(id: string | number): Observable<Order> {
    return this.httpClient.get<Order>(this.apiURL + '/orders/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createOrder(orders: any): Observable<Order> {
    return this.httpClient.post<Order>(this.apiURL + '/orders/', JSON.stringify(orders), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateOrder(id: string | number,orders: any): Observable<Order> {
    return this.httpClient.put<Order>(this.apiURL + '/orders/' + id, JSON.stringify(orders), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteOrder(id: string | number) {
    return this.httpClient.delete<Order>(this.apiURL + '/orders/' + id, this.httpOptions)
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
