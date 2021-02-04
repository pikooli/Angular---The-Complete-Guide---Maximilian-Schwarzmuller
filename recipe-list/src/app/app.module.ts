import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
import { AuthComponent } from './Component/Auth/auth.component';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { AuthInterceptorService } from './Component/Auth/auth-interceptor.service';
import { AlertComponent } from './Shared/alert/alert.component';
import { PlaceholderDirective } from './Shared/placeholder/placeholder.directive';

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
    AuthComponent,
    LoadingSpinnerComponent,
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
