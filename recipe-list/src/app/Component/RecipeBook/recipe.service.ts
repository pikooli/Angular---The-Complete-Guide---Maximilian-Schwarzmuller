import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { ShoppingListService } from '../ShoppingList/ShoppingList/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipeSelected: EventEmitter<Recipe> = new EventEmitter();

  private recipes: Recipe[] = [
    new Recipe(
      'A',
      'Simply a test',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80',
      [new Ingredient('tomato', 5), new Ingredient('apple', 10)]
    ),
    new Recipe(
      'B',
      'Simply a test',
      'https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80',
      [new Ingredient('ananas', 1), new Ingredient('thon', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}