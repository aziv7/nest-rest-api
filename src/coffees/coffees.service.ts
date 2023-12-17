import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'src/entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'express',
      brand: 'duddy',
      flavors: ['cafeine', 'choclate'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findById(id: number) {
    const found = this.coffees.find((coffee: Coffee) => coffee.id === id);

    if (!found)
      throw new NotFoundException(
        { errorCode: 'NOT_FOUND', message: `coffee with ${id} is not found` },
        `coffee with id: ${id} is not found`,
      );

    return found;
  }

  create(coffee: Coffee) {
    this.coffees = [coffee, ...this.coffees];
  }

  update(id: number, coffee: Coffee) {
    this.coffees = this.coffees.map((c: Coffee) => {
      if (c.id === id) return { ...c, ...coffee };

      return c;
    });
  }

  delete(id: number) {
    this.coffees = this.coffees.filter((c: Coffee) => c.id !== id);
  }
}
