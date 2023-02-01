import { Ingredients } from './../../shared/ingredients.modal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  public ingredients: Ingredients[] = [
    new Ingredients('Tomato', 10),
    new Ingredients('Batata', 2),
  ];

  getIngredients() {
    return this.ingredients;
  }

  addIngredients(ingredients: Ingredients) {
    this.ingredients.push(ingredients);
  }

  addIngToShoppingList(ing: Ingredients[]) {
    for (let ingredients of ing) {
      this.addIngredients(ingredients);
    }
  }

  constructor() {}
}
