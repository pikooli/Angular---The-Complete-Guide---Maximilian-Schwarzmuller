import {Component, OnInit} from "@angular/core"
import {Recipe } from "./recipe.model"
import { RecipeService } from "./recipe.service";

@Component({
	selector: "app-recipeBook",
	templateUrl: "./recipeBook.component.html"
})

export class RecipeBookComponent{
	recipeDetail : Recipe;
	
	constructor(private recipeService : RecipeService){}

	ngOnInit(){
		this.recipeService.recipeSelected.subscribe((recipe : Recipe)=> {
			this.recipeDetail = recipe
		})
	}
}