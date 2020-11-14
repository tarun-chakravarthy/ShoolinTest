import { Component, OnInit } from '@angular/core';
import { GithubCatalystService } from 'src/app/services/github-catalyst.service';

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

  filterValue: string;
  filterOn: string[] = ['Forked', 'Not Forked'];

  constructor(private githubCatalystService: GithubCatalystService) { }

  ngOnInit(): void {
    this.githubCatalystService.getRepositories().subscribe(response => {
      this.data = response;
      this.filteredList = response;
      console.log(response[0]);
    });
  }

  applyFilter(value: any) {
    this.filterValue = (value && value !== 'All') ? value : undefined;
    console.log(this.filterValue);
    if (this.filterValue && this.filterValue === 'Forked') {
      this.filteredList = this.data.filter(v => v.fork);
    } else if (this.filterValue && this.filterValue === 'Not Forked') {
      this.filteredList = this.data.filter(v => !v.fork);
    } else {
      this.filteredList = this.data;
    }
  }

  applySort(value: any) {
    if (value === 'Name') {
      this.filteredList = this.data.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    } else if (value === 'Created Time') {
      this.filteredList = this.data.sort((a, b) => {
        return <any>new Date(a.created_at) - <any>new Date(b.created_at);
      });
    } else if (value === 'Updated Time') {
      this.filteredList = this.data.sort((a, b) => {
        return <any>new Date(a.updated_at) - <any>new Date(b.updated_at);
      });
    }
  }

  getTop5Contributors(repository: any) {
    this.githubCatalystService.getContributors(repository.name).subscribe(result => {
      let names = '';
      result.forEach((element, index) => {
        if (index < 5) {
          names = names + element.login + ' ,';
        }
      });
      repository.top5Contributors = (names && names.length) ? names.substring(0, names.length - 1) : '';
    });
  }

}
