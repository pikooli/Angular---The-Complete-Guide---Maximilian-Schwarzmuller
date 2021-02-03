// this is a sort of guard so the user can't access to page that don't have recipe.
//This resolver will be trigger everytime we going to the route that implement this resolve, so we fetch the data everytime
import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { DataStorageService } from '../../Shared/data-storage.service';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { RecipeService } from './recipe.service';

@Injectable({
  providedIn: 'root',
})
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private recipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) return this.dataStorageService.fetchRecipes();
    return recipes;
  }
}
