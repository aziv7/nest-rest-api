import { CoffeesService } from './coffees.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get('/all')
  findAll(@Query() queries) {
    // const { offset, limit } = queries;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return this.coffeesService.findById(+id);
  }

  @Post('')
  // @HttpCode(HttpStatus.FOUND)
  create(@Body() body) {
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body) {
    return this.coffeesService.update(+id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.coffeesService.delete(+id);
  }
}
