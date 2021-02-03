import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipe } from '../Component/RecipeBook/recipe.model';
import { RecipeService } from '../Component/RecipeBook/recipe.service';
import { map, tap } from 'rxjs/operators';

const url =
  'https://ng-course-recipe-book-806ed-default-rtdb.firebaseio.com/recipes.json';

@Injectable({
  providedIn: 'root',
})
export class DataStorageService {
  constructor(private http: HttpClient, private recipeSerice: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeSerice.getRecipes();
    this.http.put(url, recipes).subscribe((resp) => console.log(resp));
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(url).pipe(
      map((recipes) => {
        return recipes.map((recipe) => {
          return {
            ...recipe,
            ingredients: recipe.ingredients ? recipe.ingredients : [],
          };
        });
      }),
      tap((recipes) => {
        console.log(recipes);
        this.recipeSerice.setRecipes(recipes);
      })
    );
  }
}
