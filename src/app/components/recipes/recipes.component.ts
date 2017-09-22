import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from '../../services/recipes/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipesService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    this.recipeService.recipeSelected
      .subscribe((recipe: Recipe) => {
        this.selectedRecipe = recipe
      })
  }

}
