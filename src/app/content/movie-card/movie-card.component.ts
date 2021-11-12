import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie ;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  reserveMovie() : void{

  }
  viewMovie() : void{
    this.router.navigate([`../movie`,this.movie.id])
  }

}
