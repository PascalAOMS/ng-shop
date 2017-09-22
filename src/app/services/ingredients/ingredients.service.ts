import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../../components/shared/ingredient.model';

@Injectable()
export class IngredientsService {
  ingredientsChanged = new EventEmitter<Ingredient[]>()

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ]

  getIngredients() {
    return this.ingredients.slice() // make copy so original array in service is not changed
  }

  addIngredient(ingredient: Ingredient) {
    console.log(ingredient)
    this.ingredients.unshift(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice()) // only necessary when ingredients array is copied, not overridden
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.unshift(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

}
