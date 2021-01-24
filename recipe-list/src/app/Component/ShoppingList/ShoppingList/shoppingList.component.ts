import {Component, OnInit} from "@angular/core"
import {Ingredient} from "../../../Shared/Ingredient.model"
import {ShoppingListService} from "./shopping-list.service"

@Component({
	selector : "app-shoppingList",
	templateUrl: "./shoppingList.component.html"
})

export class ShoppingList{

	ingredients: Ingredient[] = [];

	constructor(private shoppingListService : ShoppingListService){}

	updateIngredient(){
		this.ingredients = this.shoppingListService.getIngredients();
	}

	ngOnInit(){
		this.updateIngredient()
		this.shoppingListService.ingredientsChanged.subscribe((newIngredientArray : Ingredient[])=> {
			this.ingredients = newIngredientArray
		})
	}
}