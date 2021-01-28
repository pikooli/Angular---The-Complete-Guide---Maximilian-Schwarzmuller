import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingList } from './Component/ShoppingList/ShoppingList/shoppingList.component';
import { RecipeBookComponent } from './Component/RecipeBook/recipeBook.component';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  { path: 'shopping', component: ShoppingList },
  { path: 'recipes', component: RecipeBookComponent },
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
