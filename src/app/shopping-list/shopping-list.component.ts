import { ShoppingListService } from './../service/shopping-list/shopping-list.service';
import { Ingredients } from './../shared/ingredients.modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredients[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
  }
  onIngAdded(ingredients: Ingredients) {
    this.shoppingListService.addIngredients(ingredients);
    // this.ingredients.push(ingredients);
  }
}
