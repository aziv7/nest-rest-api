import { Controller, Get, Param } from '@nestjs/common';

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
}
