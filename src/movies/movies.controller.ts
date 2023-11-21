import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Patch,
  Body,
  Query,
  NotFoundException,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Array<Movie> {
    return this.moviesService.getAllMovies();
  }

  @Get(':id')
  getOneMovie(@Param('id') id: string): Movie {
    const movie = this.moviesService.getOneMovie(id);
    if (!movie) {
      throw new NotFoundException('error...!');
    }
    return movie;
  }

  @Post()
  createMovie(@Body() movieData) {
    return this.moviesService.createOneMovie(movieData);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.moviesService.deleteOneMovie(id);
  }

  //리소스 전부 업데이트
  @Put()
  updateAllParts(@Param('id') id: string) {
    return '영화 정보 전부 업데이트';
  }

  //리소스 일부 업데이트
  @Patch()
  updatePart(@Param('id') id: string, @Body() updateData) {
    return this.moviesService.updateMovie(id, updateData);
  }
}
