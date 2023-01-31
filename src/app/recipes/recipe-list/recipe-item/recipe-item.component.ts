import { Recipes } from './../../recipe.modal';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() recipes!: Recipes;
  @Output() recipeSelected = new EventEmitter<void>();
  onSelectedRecipe() {
    this.recipeSelected.emit();
  }
}
