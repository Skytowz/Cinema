import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Movie } from '../shared/models/movie';
import { MovieService } from '../shared/services/movie.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  movies: Movie[] = [];

  id?:number = undefined;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.route.params.subscribe((params) => {
      console.log(params);
    })
    this.refreshMovies();
  }

  refreshMovies(): Subscription {
    return this.movieService.getMovies().subscribe(movie=>{
      console.log(movie);
      this.movies = movie.items;
    })
      
  }

}
