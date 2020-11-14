import { Component, OnInit, Input } from '@angular/core';
import { GithubCatalystService } from 'src/app/services/github-catalyst.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {

  users: String[]

  constructor(private githubService: GithubCatalystService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.githubService.getData().subscribe((data) => {
      console.log(data)
      this.users = data;
    })
  }

  onNavigate(link: string) {
    window.open(link, "_blank");
  }
}
