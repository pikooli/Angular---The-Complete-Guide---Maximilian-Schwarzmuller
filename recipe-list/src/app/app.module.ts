import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"
import { AppComponent } from './app.component';
import {HeaderComponent} from "./Component/Header/header.component"

import {RecipeBookComponent} from "./Component/RecipeBook/recipeBook.component"
import {RecipeListComponent} from "./Component/RecipeBook/RecipeList/recipeList.component"
import {RecipeItemComponent} from "./Component/RecipeBook/RecipeItem/recipeItem.component"
import {RecipeDetailComponent} from "./Component/RecipeBook/RecipeDetail/recipeDetail.component"

import {ShoppingList} from "./Component/ShoppingList/ShoppingList/ShoppingList.component"
import {ShoppingListEdit} from "./Component/ShoppingList/ShoppingListEdit/shoppingListEdit.component";

import {DropdownDirective} from "./Shared/dropDown.directive"

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    RecipeListComponent,
    ShoppingList,
    ShoppingListEdit,
    RecipeBookComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { 
}
