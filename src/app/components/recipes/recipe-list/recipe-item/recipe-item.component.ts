import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipesService } from '../../../../services/recipes/recipes.service';

@Component({
  selector: 'recipe-item',
  templateUrl: './recipe-item.component.html'
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }


  selectRecipe() {
    this.recipeService.recipeSelected.emit(this.recipe)
  }

}
