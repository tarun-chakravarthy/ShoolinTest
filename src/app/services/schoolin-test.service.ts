import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SchoolinTestService {

  constructor(private http: HttpClient) { }

  getusers(): Observable<any> {

    const url = "https://jsonplaceholder.typicode.com/users"
    return this.http.get(url)
  }

  getPosts(): Observable<any> {

    const url = "https://jsonplaceholder.typicode.com/posts"
    return this.http.get(url)
  }

  getComments(): Observable<any> {

    const url = "https://jsonplaceholder.typicode.com/comments"
    return this.http.get(url)
  }
}
