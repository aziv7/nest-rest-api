import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get('/all')
  findAll() {
    return [];
  }

  @Get(':id')
  findById(@Param('id') id: number) {
    return 'this is coffee ' + id;
  }

  @Post('')
  @HttpCode(HttpStatus.FOUND)
  create(@Body() body) {
    return body;
  }
}
