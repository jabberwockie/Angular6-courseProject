import {Ingredient} from '../shared/ingredient.model';
import {EventEmitter} from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  addedIngredient = new EventEmitter<Ingredient>();

  private ingredients: Ingredient[] = [
    new Ingredient('Carrot', 1),
    new Ingredient('Tomato', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }



  addIngredient(newIng: Ingredient){
    this.ingredients.push(newIng);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]){
    this.ingredients.push(...ingredients);
  }

}
