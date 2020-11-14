import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './components/details/details.component';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'repos',
    component: RepoListComponent
  },
  {
    path: 'description',
    component: DetailsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DetailsComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    Ng2SmartTableModule,
    RouterModule.forRoot(routes),
  ],
  providers: [DetailsComponent, RepoListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

  users: String[]

  getUsers() {

  }
}
