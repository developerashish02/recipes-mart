import { Recipes } from './recipe.modal';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  selectedRecipe!: Recipes;
}
