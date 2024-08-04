import { Inject, Injectable } from '@angular/core';
import { MEAL_REPOSITORY_TOKEN, MealRepository } from '../interfaces/meal-repository';
import { Meal } from '../entities/meal';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  constructor(
    @Inject(MEAL_REPOSITORY_TOKEN) 
    private mealRepository: MealRepository
  ) { }

  async fetchMeals(mealName: string): Promise<Meal[] | null> {
    const meals = await this.mealRepository.getAllMealsByName(mealName);
    return meals;
  }

  async fetchMealsByCategory(categoryName: string): Promise<Meal[] | null> {
    const meals = await this.mealRepository.getAllMealsByCategory(categoryName);
    return meals;
  }

  async fetchMealsById(id: string): Promise<Meal> {
    const meal = await this.mealRepository.getMealById(id);
    return meal;
  }
}
