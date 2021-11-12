import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
const key = "k_f5821ki0";
const popularMovie = `${environment.apiUrl}/movie`;
const api = `https://imdb-api.com/fr/API/Title/${key}/`

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any>{
    return this.http.get<Movie[]>(popularMovie);
  }

  getMovie(id:string): Observable<any>{
    console.log(`${api}${id}`);
    return this.http.get<Movie>(`${api}${id}`);
  }

}


