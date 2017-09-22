import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model'
import { RecipesService } from '../../../services/recipes/recipes.service';
import { LoggingService } from '../../../services/logging/logging.service';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = []
  // recipes: Recipe[] = [{
  //   name: 'Test Name',
  //   description: 'This is a description',
  //   imagePath: 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'
  // }]
  //
  // recipes: Recipe[] = [
  //   new Recipe('Test', 'Description', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg'),
  //   new Recipe('Delicious Cake', 'Makes me so happy', 'http://www.seriouseats.com/recipes/assets_c/2016/05/20160503-fava-carrot-ricotta-salad-recipe-1-thumb-1500xauto-431710.jpg')
  // ]

  constructor(private recipesService: RecipesService,
              private loggingService: LoggingService) {}

  ngOnInit() {
    this.recipes = this.recipesService.getRecipes()
  }


}

// interface Recipe {
//   name: string,
//   description: string,
//   imagePath: string
// }
