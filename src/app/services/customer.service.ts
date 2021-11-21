import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Customer } from '../Models/customer-model'; 
import { Order } from '../Models/order-model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiURL = "http://localhost:7161/api";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.apiURL + '/customers')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getCustomer(id: string | number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.apiURL + '/customers/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getCustomerOrders(id: string | number): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.apiURL + '/Customers/getOrders/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  createCustomer(customers: any): Observable<Customer> {
    return this.httpClient.post<Customer>(this.apiURL + '/customers/', JSON.stringify(customers), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  updateCustomer(id: string | number,customers: any): Observable<Customer> {
    return this.httpClient.put<Customer>(this.apiURL + '/customers/' + id, JSON.stringify(customers), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  deleteCustomer(id: string | number) {
    return this.httpClient.delete<Customer>(this.apiURL + '/customers/' + id, this.httpOptions)
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
