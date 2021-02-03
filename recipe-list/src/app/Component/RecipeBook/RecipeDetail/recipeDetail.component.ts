import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeDetail',
  templateUrl: './recipeDetail.component.html',
})
export class RecipeDetailComponent {
  id: number;
  recipeDetail: Recipe;
  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  showMenu: boolean = false;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.recipeDetail = this.recipeService.getRecipe(Number(params['id']));
      this.id = Number(params['id']);
    });
  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  toShoppingList() {
    this.recipeService.addIngredientToShoppingList(
      this.recipeDetail.ingredients
    );
  }
}
