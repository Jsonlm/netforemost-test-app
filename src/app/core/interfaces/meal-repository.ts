import { InjectionToken } from "@angular/core";
import { Meal } from "../entities/meal";

export const MEAL_REPOSITORY_TOKEN = new InjectionToken<MealRepository>('MealRepository');

export interface MealRepository {
    getAllMealsByName(mealName: string): Promise<Meal[] | null>;
    getAllMealsByCategory(mealName: string): Promise<Meal[] | null>;
    getAllMealsById(id: string): Promise<Meal>;
}