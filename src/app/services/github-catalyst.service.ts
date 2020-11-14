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

  getContributors(repositoRyName: string): Observable<any> {

    const url = `https://api.github.com/repos/catalyst/${repositoRyName}/contributors`
    return this.http.get(url)
  }
}
