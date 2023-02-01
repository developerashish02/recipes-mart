import { RecipeService } from './../../service/recipes/recipe.service';
import { Recipes } from './../recipe.modal';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  constructor(private recipeService: RecipeService) {}
  @Output() recipeDetail = new EventEmitter<Recipes>();
  public recipes: Recipes[] = [];

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }
}
