import { Component, ViewChild, ElementRef } from '@angular/core';
import { Ingredient } from '../../../Shared/Ingredient.model';
import { ShoppingListService } from '../ShoppingList/shopping-list.service';

@Component({
  selector: 'app-shoppingListEdit',
  templateUrl: './shoppingListEdit.component.html',
})
export class ShoppingListEdit {
  @ViewChild('nameInput') nameInput: ElementRef;
  @ViewChild('amoutInput') amoutInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  addItem() {
    if (
      this.nameInput.nativeElement.value &&
      this.amoutInput.nativeElement.value
    ) {
      let newItem = new Ingredient(
        this.nameInput.nativeElement.value,
        this.amoutInput.nativeElement.value
      );
      this.shoppingListService.addItem(newItem);
      this.nameInput.nativeElement.value = '';
      this.amoutInput.nativeElement.value = '';
    }
  }
}
