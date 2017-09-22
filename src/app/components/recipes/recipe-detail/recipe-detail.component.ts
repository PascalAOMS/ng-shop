import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredient } from '../../shared/ingredient.model';
import { RecipesService } from '../../../services/recipes/recipes.service';

@Component({
  selector: 'recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipesService) {}

  ngOnInit() {
    // this.recipeService.recipeSelected
    //   .subscribe((recipe: Recipe) => this.recipe = recipe)
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.recipeService.addToShoppingList(ingredients)
  }

}
