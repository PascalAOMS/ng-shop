import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from '../../components/recipes/recipe.model';
import { Ingredient } from '../../components/shared/ingredient.model';
import { IngredientsService } from '../ingredients/ingredients.service';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>()

  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'Description',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]
    ),
    new Recipe(
      'Delicious Cake',
      'Makes me so happy',
      'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg',
      [
        new Ingredient('Bun', 1),
        new Ingredient('Carrot', 20)
      ]
    )
  ]

  constructor(private ingredientsService: IngredientsService) {}

  getRecipes() {
    return this.recipes.slice() // make copy so original array in service is not changed
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.ingredientsService.addIngredients(ingredients)
  }


}
