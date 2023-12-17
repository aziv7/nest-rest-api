import { Injectable } from '@nestjs/common';
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
    return this.coffees.find((coffee: Coffee) => coffee.id === id);
  }

  create(coffee: Coffee) {
    this.coffees = [coffee, ...this.coffees];
  }

  update(id: number, coffee: Coffee) {
    this.coffees = this.coffees.map((c: Coffee) => {
      if (c.id === id) return { ...c, ...coffee };

      return c;
    });
    console.log(this.coffees);
  }

  delete(id: number) {
    this.coffees = this.coffees.filter((c: Coffee) => c.id !== id);
  }
}
