import { Component, OnInit } from '@angular/core';
import { GithubCatalystService } from 'src/app/services/github-catalyst.service';

import * as moment from 'moment';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.sass']
})

export class RepoListComponent implements OnInit {
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false
    },
    columns: {
      name: {
        title: 'Name'
      },
      description: {
        title: 'Description'
      },
      git_url: {
        title: 'Git URL'
      },
      fork: {
        title: 'Is It a Fork'
      },
      watchers_count: {
        title: 'Watchers Count'
      },
      language: {
        title: 'Language'
      },
      contributors_url: {
        title: 'Contributors URL'
      }
    }
  };

  data: any[] = [];
  filteredList: any[] = [];


  constructor(private githubCatalystService: GithubCatalystService) { }

  ngOnInit(): void {
    this.githubCatalystService.getRepositories().subscribe(response => {
      this.data = response;
      this.filteredList = response;
    });
  }

  forkFilter(filterValue: boolean) {
    if (filterValue) {
      this.filteredList = this.data.filter(v => v.fork);
    } else {
      this.filteredList = this.data.filter(v => !v.fork);
    }
  }

  CreatedFilter(filterValue: boolean) {
    console.log(filterValue);
    this.filteredList = [];
    if (filterValue) {
      this.filteredList = this.data.sort((a, b) => {
        return new Date(a.created_at) - new Date(b.created_at);
      });
    } else {
      console.log('desc');
      this.filteredList = this.data.sort((a, b) => {
        return new Date(b.created_at) - new Date(a.created_at);
      });
    }
  }

}
