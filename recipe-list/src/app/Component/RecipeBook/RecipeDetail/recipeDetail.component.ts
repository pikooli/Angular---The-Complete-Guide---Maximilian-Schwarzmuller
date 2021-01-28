import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipeDetail.component.html',
})
export class RecipeDetailComponent {
  recipeDetail: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute
  ) {}

  showMenu: boolean = false;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeDetail = this.recipeService.getRecipe(Number(params['id']));
    });
  }

  toShoppingList() {
    this.recipeService.addIngredientToShoppingList(
      this.recipeDetail.ingredients
    );
  }
}
