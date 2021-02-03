import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/Header/header.component';

import { RecipeBookComponent } from './Component/RecipeBook/recipeBook.component';
import { RecipeListComponent } from './Component/RecipeBook/RecipeList/recipeList.component';
import { RecipeItemComponent } from './Component/RecipeBook/RecipeItem/recipeItem.component';
import { RecipeDetailComponent } from './Component/RecipeBook/RecipeDetail/recipeDetail.component';

import { ShoppingList } from './Component/ShoppingList/ShoppingList/shoppingList.component';
import { ShoppingListEdit } from './Component/ShoppingList/ShoppingListEdit/shoppingListEdit.component';

import { DropdownDirective } from './Shared/dropDown.directive';
import { AppRoutingModule } from './app.routing.module';
import { RecipeStartComponent } from './Component/RecipeBook/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './Component/RecipeBook/recipe-edit/recipe-edit.component';

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
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
