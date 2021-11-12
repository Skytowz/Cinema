import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models/movie';
import { MovieService } from 'src/app/shared/services/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movieId!:string;
  @Input() movie!: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieId = this.route.snapshot.params['id'];
    this.movieService.getMovie(this.movieId)
      .subscribe((movie) => {
        console.log(movie);
        this.movie = movie;
      });
  }

  reserveMovie(){

  }

}
