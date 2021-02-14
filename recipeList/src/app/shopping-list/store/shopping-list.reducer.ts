import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListAction from './shopping-list.actions';

export interface ingredientInterface {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

// before global shopping list store
// export interface AppState {
//   shoppingList: ingredientInterface;
// }

const initialState: ingredientInterface = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Tomatoes', 10)],
  editedIngredient: null,
  editedIngredientIndex: -1,
};

export function shoppingListReducer(
  state: ingredientInterface = initialState,
  action: ShoppingListAction.ShoppingListActions
) {
  switch (action.type) {
    // convention is to be upperccase, for a action type
    case ShoppingListAction.ADD_INGREDIENT:
      return { ...state, ingredients: [...state.ingredients, action.payload] };
    case ShoppingListAction.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...action.payload],
      };
    case ShoppingListAction.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter(
          (value, index) => index != state.editedIngredientIndex
        ),
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    case ShoppingListAction.UPDATE_INGREDIENT:
      const newIngredients = state.ingredients.slice();
      newIngredients[state.editedIngredientIndex] = {
        ...newIngredients[state.editedIngredientIndex],
        ...action.payload,
      };

      return {
        ...state,
        ingredients: newIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    case ShoppingListAction.START_EDIT:
      return {
        ...state,
        editedIngredientIndex: action.payload,
        editedIngredient: { ...state.ingredients[action.payload] },
      };
    case ShoppingListAction.STOP_EDIT:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1,
      };
    default:
      return state;
  }
}
