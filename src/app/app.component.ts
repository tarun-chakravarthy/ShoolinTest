import { Component } from '@angular/core';
import { SchoolinTestService } from './services/schoolin-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Schoolin-test';

  users = [];
  currentUser = '';
  fullName = "Tarun Duggempudi";
  firstName = '';
  selectedUser = null;
  posts = [];
  comments = [];
  selectedPost = null;

  dataSource: any[] = [];

  constructor(private getInfo: SchoolinTestService) {
    this.getUsers();
  }

  getUsers() {
    this.getInfo.getusers().subscribe((data) => {
      console.log(data)
      this.users = data;
      this.users.forEach(user => { user["firstName"] = user.name.replace(/ .*/, ''); });
    })
  }

  selectUser(user) {
    this.posts = [];
    this.comments = [];
    this.selectedUser = user;
    this.getPosts();
  }

  getPosts() {
    if (this.selectedUser) {
      this.getInfo.getPosts().subscribe((data) => {
        this.posts = data.filter(p => p.userId === this.selectedUser.id);
      });
    }
  }

  getComments(post) {
    this.comments = [];
    this.getInfo.getComments().subscribe((data) => {
      this.comments = data.filter(c => c.postId === post.id);
    });
  }
}
