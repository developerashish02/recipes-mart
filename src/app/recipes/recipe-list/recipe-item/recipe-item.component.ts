import { RecipeService } from './../../../service/recipes/recipe.service';
import { Recipes } from './../../recipe.modal';
import { Component, Input } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor(private recipeService: RecipeService) {}

  @Input() recipes!: Recipes;
  onSelectedRecipe() {
    this.recipeService.recipeSelected.emit(this.recipes);
  }
}
