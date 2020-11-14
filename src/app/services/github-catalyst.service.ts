import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GithubCatalystService {

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {

    const url = "https://api.github.com/orgs/catalyst"
    return this.http.get(url)
  }

  getRepositories(): Observable<any> {

    const url = "https://api.github.com/orgs/catalyst/repos"
    return this.http.get(url)
  }
}
