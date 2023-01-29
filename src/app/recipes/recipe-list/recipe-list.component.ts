import { Recipes } from './../recipe.modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  public recipes: Recipes[] = [
    new Recipes(
      'Indian Recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBse7B4urhEjty-C5owz4uP5AtYdRi744grG9cKGvLg&s'
    ),
    new Recipes(
      'Indian Recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTBse7B4urhEjty-C5owz4uP5AtYdRi744grG9cKGvLg&s'
    ),
  ];
}
