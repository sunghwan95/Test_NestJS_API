import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Array<Movie> = [];

  getAllMovies(): Array<Movie> {
    return this.movies;
  }

  getOneMovie(id: string): Movie {
    return this.movies.find((movie) => movie.id === +id);
  }

  deleteOneMovie(id: string) {
    this.getOneMovie(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  createOneMovie(movieData) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateMovie(id: string, updateData) {
    const movie = this.getOneMovie(id);
    this.deleteOneMovie(id);
    this.movies.push({ ...movie, ...updateData });
  }
}
