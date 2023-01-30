import { Ingredients } from './../../shared/ingredients.modal';
import {
  Component,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edite',
  templateUrl: './shopping-edite.component.html',
  styleUrls: ['./shopping-edite.component.css'],
})
export class ShoppingEditeComponent {
  @ViewChild('nameInput', { static: false })
  nameInputRef!: ElementRef;

  @ViewChild('amountInput', { static: false }) amountInputRef!: ElementRef;

  @Output() ingredientsAdded = new EventEmitter<Ingredients>();
  onAddItem(event: Event) {
    event.preventDefault();
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredients = new Ingredients(ingName, ingAmount);
    this.ingredientsAdded.emit(newIngredients);
  }

  constructor() {}
}
