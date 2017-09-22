import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { LoggingService } from '../../../services/logging/logging.service';
import { IngredientsService } from '../../../services/ingredients/ingredients.service';

@Component({
  selector: 'shopping-edit',
  templateUrl: './shopping-edit.component.html'
})

export class ShoppingEditComponent {
  @ViewChild('nameInput') name: ElementRef
  @ViewChild('amountInput') amount: ElementRef

  constructor(private ingredientService: IngredientsService) {}

  saveIngredient() {
    const name   = this.name.nativeElement.value,
          amount = this.amount.nativeElement.value

    this.ingredientService.addIngredient(new Ingredient(name, amount))

    return false
  }

}
