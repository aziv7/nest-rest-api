import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'src/entities/coffee.entity';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: uuidv4(),
      name: 'express',
      brand: 'duddy',
      flavors: ['cafeine', 'choclate'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findById(id: string) {
    const found = this.coffees.find((coffee: Coffee) => coffee.id === id);

    if (!found)
      throw new NotFoundException(
        { errorCode: 'NOT_FOUND', message: `coffee with ${id} is not found` },
        `coffee with id: ${id} is not found`,
      );

    return found;
  }

  create(coffee: CreateCoffeeDto) {
    const { name, brand, flavors } = coffee;
    this.coffees = [{ name, brand, flavors, id: uuidv4() }, ...this.coffees];
  }

  update(id: string, coffee: UpdateCoffeeDto) {
    const { name, brand, flavors } = coffee;
    this.coffees = this.coffees.map((c: Coffee) => {
      if (c.id === id) return { ...c, name, brand, flavors };

      return c;
    });
  }

  delete(id: string) {
    this.coffees = this.coffees.filter((c: Coffee) => c.id !== id);
  }
}
