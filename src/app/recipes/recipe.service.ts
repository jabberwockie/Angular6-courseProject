import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class RecipeService {
  recipeSelected  =  new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg',
      [
        new Ingredient('Potatoes', 5),
        new Ingredient('Shredded cheese', 1),
        new Ingredient('Cilantro', 1)

      ]),
    new Recipe('A new Recipe 2', 'This is a simple description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCOrNznW-NtEBt_97wlz2Gyt3qeJBSf7PuMUW3dHH8kUR3mq4',
      [
        new Ingredient('Pepper', 5),
        new Ingredient('Sausage', 5)
      ]),
    new Recipe('A new Recipe 3', 'This is another description','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg',
      [
        new Ingredient('Kiwi', 2),
        new Ingredient('Melon', 0.5),
        new Ingredient('Pineapple', 1),
        new Ingredient('Granade', 1)
    ])
  ];

  constructor(private shoppingServ: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.shoppingServ.addIngredients(ingredients);
  }
}
