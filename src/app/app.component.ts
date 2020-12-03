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
  showLoader =  false;
  dataSource: any[] = [];

  showLoadMoreButton = true;
  constructor(private getInfo: SchoolinTestService) {
    this.getUsers();
  }

  getUsers() {
    this.showLoader = true;
    this.getInfo.getusers().subscribe((data) => {
      console.log(data)
      setTimeout(a=>{
        this.users = data;
        this.users.forEach(user => { user["firstName"] = user.name.replace(/ .*/, ''); });
        this.showLoader = false;
      },2000,[]);

      
    })
  }

  selectUser(user) {
    this.showLoadMoreButton = true;
    this.posts = [];
    this.comments = [];
    this.selectedUser = user;
    this.getPosts();
  }

  getPosts() {
    if (this.selectedUser) {
      this.showLoader = true;
      this.getInfo.getPosts().subscribe((data) => {
        setTimeout(a=>{
          this.posts = data.filter(p => p.userId === this.selectedUser.id);
          this.showLoader = false;
        },2000,[]);
      });
    }
  }

  getComments(post) {
    this.comments = [];
    this.showLoader = true;
    this.getInfo.getComments().subscribe((data) => {
      setTimeout(a=>{
        this.comments = data.filter(c => c.postId === post.id);
        this.showLoader = false;
      },2000,[]);
    });
  }

  loadMore() {
    this.showLoader = true;
    setTimeout(a=>{
      this.showLoadMoreButton = !this.showLoadMoreButton;
      this.showLoader = false;
    },2000,[]);
  }
}
