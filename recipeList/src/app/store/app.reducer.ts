import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromRecipe from '../recipes/store/recipe.reducer';

import { ActionReducerMap } from '@ngrx/store';
import { from } from 'rxjs';
export interface AppState {
  shoppingList: fromShoppingList.ingredientInterface;
  auth: fromAuth.State;
  recipe: fromRecipe.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  shoppingList: fromShoppingList.shoppingListReducer,
  auth: fromAuth.authReducer,
  recipe: fromRecipe.recipeReducer,
};
