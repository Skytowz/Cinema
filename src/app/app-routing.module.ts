import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ContentComponent } from './content/content.component';
import { MovieDetailComponent } from './content/movie-detail/movie-detail.component';

const routes: Routes = [
  {path:"", redirectTo:"accueil", pathMatch:"full"},
  {path:"accueil", component:AccueilComponent,pathMatch:"full"},
  {path:"movie", 
    children : [
      {path: "", component:ContentComponent, pathMatch:"full"},
      {path: ":id",component:MovieDetailComponent,pathMatch:"prefix"}
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
