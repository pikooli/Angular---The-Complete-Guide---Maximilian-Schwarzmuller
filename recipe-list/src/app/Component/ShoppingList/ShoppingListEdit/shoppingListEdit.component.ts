import {
  Component,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../Shared/Ingredient.model';
import { ShoppingListService } from '../ShoppingList/shopping-list.service';

@Component({
  selector: 'app-shoppingListEdit',
  templateUrl: './shoppingListEdit.component.html',
})
export class ShoppingListEdit {
  @ViewChild('f') formGroup: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  constructor(private shoppingListService: ShoppingListService) {}

  // addItem() {
  //   if (
  //     this.nameInput.nativeElement.value &&
  //     this.amoutInput.nativeElement.value
  //   ) {
  //     let newItem = new Ingredient(
  //       this.nameInput.nativeElement.value,
  //       this.amoutInput.nativeElement.value
  //     );
  //     this.shoppingListService.addItem(newItem);
  //     this.nameInput.nativeElement.value = '';
  //     this.amoutInput.nativeElement.value = '';
  //   }
  // }
  ngOnInit() {
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index: number) => {
        this.editedItemIndex = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.formGroup.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount,
        });
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  deleteItem() {
    if (this.editMode)
      this.shoppingListService.deleteItem(this.editedItemIndex);
    this.clearForm();
  }

  clearForm() {
    this.editMode = false;
    this.formGroup.reset();
  }
  onSubmit() {
    if (this.formGroup.value['name'] && this.formGroup.value['amount']) {
      let newItem = new Ingredient(
        this.formGroup.value['name'],
        this.formGroup.value['amount']
      );
      if (this.editMode) {
        this.shoppingListService.updateIngredient(
          this.editedItemIndex,
          newItem
        );
        this.editMode = false;
      } else this.shoppingListService.addItem(newItem);
      this.formGroup.reset();
    }
  }
}
