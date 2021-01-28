import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipeItem',
  templateUrl: './recipeItem.component.html',
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() {}
}
