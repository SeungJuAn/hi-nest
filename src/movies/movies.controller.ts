import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get('/')
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Movie {
    return this.moviesService.getOne(id);
  }

  @Post()
  create(@Body() moveData: Movie) {
    return this.moviesService.create(moveData);
  }

  @Post('delete/:id')
  delete(@Param('id') id: string) {
    return this.moviesService.delete(id);
  }

  @Get('search')
  update(@Query('year') searchingYear: string) {
    return `this moive is ${searchingYear} years old`;
  }
}
