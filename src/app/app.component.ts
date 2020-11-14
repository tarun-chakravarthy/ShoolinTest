import { Component } from '@angular/core';
import { GithubCatalystService } from './services/github-catalyst.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'catalyst-app';

  users: String[]

  displayedColumns: string[] = [
    'Name',
    'Description',
    'GitHub URL',
    'Is it a fork',
    'Star Count',
    'Watchers Count',
    'License',
    'Language',
    'Top 5 contributors'
  ];

  dataSource: any[] = [];

  constructor(private githubService: GithubCatalystService) { }

  getUsers() {
    this.githubService.getData().subscribe((data) => {
      console.log(data)
      this.users = data;
    })
  }

  getList() {
    this.githubService.getRepositories().subscribe((data) => {
      console.log(data)
      this.dataSource = [data];
    })
  }
}
