import { Ingredients } from './../shared/ingredients.modal';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  public ingredients: Ingredients[] = [
    new Ingredients('Tomato', 10),
    new Ingredients('Batata', 2),
  ];
}
