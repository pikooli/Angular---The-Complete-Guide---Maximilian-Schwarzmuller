import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingList } from './Component/ShoppingList/ShoppingList/shoppingList.component';
import { RecipeBookComponent } from './Component/RecipeBook/recipeBook.component';
import { RecipeDetailComponent } from './Component/RecipeBook/RecipeDetail/recipeDetail.component';
import { RecipeStartComponent } from './Component/RecipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './Component/RecipeBook/recipe-edit/recipe-edit.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    component: RecipeBookComponent,
    children: [
      { path: '', component: RecipeStartComponent, pathMatch: 'full' },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent },
    ],
  },
  { path: 'shopping', component: ShoppingList },
];

@NgModule({
  imports: [
    // in case of browser or server that will recharge the page when routing
    RouterModule.forRoot(routes),
    // [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
