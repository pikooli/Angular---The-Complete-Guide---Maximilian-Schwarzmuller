import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipeDetail.component.html',
})
export class RecipeDetailComponent {
  @Input() recipeDetail: Recipe;

  constructor(private recipeService: RecipeService) {}

  showMenu: boolean = false;

  toShoppingList() {
    this.recipeService.addIngredientToShoppingList(
      this.recipeDetail.ingredients
    );
  }
}
