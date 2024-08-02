import { Component, OnInit, ViewChild } from '@angular/core';
import { Meal } from '../core/entities/meal';
import { MealService } from '../core/services/meal.service';
import { CategoryService } from '../core/services/category.service';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('categorySelect') categorySelect!: IonSelect;
  selectedCategory: string = ''; 

  public filteredItems: Meal[] = [];
  public categoryList: any;
  public mealList: any;

  constructor(
    private mealService: MealService,
    private categoryService: CategoryService
  ) {}

  async ngOnInit() {
    this.categoryList = await this.categoryService.fetchCategories();
  }

  async categoryChange() {
    this.selectedCategory = this.categorySelect.value;
    this.mealList = await this.mealService.fetchMealsByCategory(this.selectedCategory?.toString());
    this.filteredItems = this.mealList.meals; 
  }

  async search(e: any) {
    /* setTimeout(() => {
      console.log(e.target.value);
    }, 1500); */
    
    this.mealList = await this.mealService.fetchMeals(e.target.value);
    this.filteredItems = this.mealList.meals; 
  }
}
