import {Component, EventEmitter, Output, OnInit} from "@angular/core"
import {Recipe } from "../recipe.model"
import { RecipeService } from "../recipe.service";

@Component ({
	selector : "app-recipeList",
	templateUrl: "./recipeList.component.html"
})

export class RecipeListComponent{	
	recipes: Recipe[] = [];
	
	constructor(private recipeService : RecipeService){
	}

	ngOnInit(){
		this.recipes = this.recipeService.getRecipes();
	}


}