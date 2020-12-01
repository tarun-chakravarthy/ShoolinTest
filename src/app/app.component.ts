import { Component } from '@angular/core';
import { GithubCatalystService } from './services/github-catalyst.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'catalyst-app';

  users = [];
  selecteduser = null;
  posts = [];
  comments = [];
  selectedPost = null;

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

  constructor(private githubService: GithubCatalystService) { 
    this.getUsers();
  }

  getUsers() {
    this.githubService.getusers().subscribe((data) => {
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

  selectUser(user){
     this.posts = [];
     this.comments = [];
     this.selecteduser = user;
     this.getPosts();
  }

  getPosts() {
    if ( this.selecteduser ) {
      this.githubService.getPosts().subscribe( (data) => {
            this.posts = data.filter ( p => p.userId === this.selecteduser.id);
      });
    }
  }

  getComments(post) {
    this.comments = [];
    this.githubService.getComments().subscribe( (data) => {
      this.comments = data.filter ( c => c.postId === post.id);
});
  }
}
