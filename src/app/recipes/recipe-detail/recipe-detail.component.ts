import { RecipeService } from './../../service/recipes/recipe.service';
import { Recipes } from './../recipe.modal';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  constructor(private recipeService: RecipeService) {}
  @Input() recipe!: Recipes;

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
}
