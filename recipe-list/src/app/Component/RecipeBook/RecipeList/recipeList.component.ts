import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeList',
  templateUrl: './recipeList.component.html',
})
export class RecipeListComponent {
  recipes: Recipe[] = [];
  subscribe: Subscription;
  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.subscribe = this.recipeService.recipesChanged.subscribe(
      (recipes: Recipe[]) => {
        this.recipes = recipes;
      }
    );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
