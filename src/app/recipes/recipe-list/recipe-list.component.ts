import { Recipes } from './../recipe.modal';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  @Output() recipeDetail = new EventEmitter<Recipes>();
  public recipes: Recipes[] = [
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

  onRecipeSelected(recipe: Recipes) {
    this.recipeDetail.emit(recipe);
  }
}
