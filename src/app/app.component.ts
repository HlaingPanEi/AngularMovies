import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Results } from './results';
import { MovieResponse } from './movie-response';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  movieListResult?: Results[];
  loading = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
      
  }

  getMovieList() {
    return this.http.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=a99aca78f4fc7deb6897d69b78e298bf&language=en-US&page=1`);
  }

  getMovies(){
    this.getMovieList()
      .subscribe((response: MovieResponse) => {
        this.movieListResult = response.results;
        this.loading = false;
      })
  }
}

