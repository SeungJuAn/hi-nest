import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll() {
    return this.movies;
  }

  getOne(id: string) {
    return this.movies.find((movie) => movie.id === parseInt(id));
  }

  create(newMovies: Movie): boolean {
    this.movies.push(newMovies);
    return true;
  }

  delete(id: string): boolean {
    this.movies.filter((movie) => movie.id !== parseInt(id));
    return true;
  }
}
