import { RecipeService } from './../service/recipes/recipe.service';
import { Recipes } from './recipe.modal';
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  selectedRecipe!: Recipes;

  constructor(private recipeService: RecipeService) {}

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe((recipes: Recipes) => {
      this.selectedRecipe = recipes;
    });
  }
}
