import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://c1.staticflickr.com/9/8585/28906445485_ce32150295_b.jpg'),
    new Recipe('A new Recipe 2', 'This is a simple description', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRCOrNznW-NtEBt_97wlz2Gyt3qeJBSf7PuMUW3dHH8kUR3mq4'),
    new Recipe('A new Recipe 3', 'This is another descriprtion','https://c1.staticflickr.com/6/5737/30622968353_35e06fcb52_b.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
