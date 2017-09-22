import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { RecipesComponent } from './components/recipes/recipes.component';
import { RecipeListComponent } from './components/recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './components/recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './components/shopping-list/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './components/recipes/recipe-detail/recipe-detail.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralDirective } from './directives/structural.directive';
import { DropdownDirective } from './components/shared/dropdown.directive';
import { LoggingService } from './services/logging/logging.service';
import { IngredientsService } from './services/ingredients/ingredients.service';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    HighlightDirective,
    StructuralDirective,
    DropdownDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggingService, IngredientsService], // if set in components, creates new service instance and is valid only for this components + its children
  bootstrap: [AppComponent]
})
export class AppModule { }
