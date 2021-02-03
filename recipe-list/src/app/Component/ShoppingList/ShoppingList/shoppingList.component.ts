import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../../../Shared/Ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shoppingList',
  templateUrl: './shoppingList.component.html',
})
export class ShoppingList {
  ingredients: Ingredient[] = [];
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) {}

  updateIngredient() {
    this.ingredients = this.shoppingListService.getIngredients();
  }

  ngOnInit() {
    this.updateIngredient();
    this.igChangeSub = this.shoppingListService.ingredientsChanged.subscribe(
      (newIngredientArray: Ingredient[]) => {
        this.ingredients = newIngredientArray;
      }
    );
  }

  onEditItem(i: number) {
    this.shoppingListService.startedEditing.next(i);
  }

  ngOnDestroy() {
    this.igChangeSub.unsubscribe();
  }
}
