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

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return 'updated coffee ' + id + JSON.stringify(body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return 'the coffee removed ' + id;
  }
}
