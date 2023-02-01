import { Recipes } from './../../recipes/recipe.modal';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor() {}
  recipeSelected = new EventEmitter<Recipes>();
  
  private recipes: Recipes[] = [
    new Recipes(
      'Indian Recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBse7B4urhEjty-C5owz4uP5AtYdRi744grG9cKGvLg&s'
    ),
    new Recipes(
      'Indian Modern Kadak Recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBse7B4urhEjty-C5owz4uP5AtYdRi744grG9cKGvLg&s'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
