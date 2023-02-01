import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { Ingredients } from './../../shared/ingredients.modal';
import { Recipes } from './../../recipes/recipe.modal';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private slService: ShoppingListService) {}
  recipeSelected = new EventEmitter<Recipes>();

  private recipes: Recipes[] = [
    new Recipes(
      'Indian Recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBse7B4urhEjty-C5owz4uP5AtYdRi744grG9cKGvLg&s',
      [new Ingredients('banana', 2), new Ingredients('apple', 12)]
    ),
    new Recipes(
      'Indian Modern Kadak Recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBse7B4urhEjty-C5owz4uP5AtYdRi744grG9cKGvLg&s',
      [new Ingredients('batata', 20)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngToShoppingList(ingredients);
  }
}
