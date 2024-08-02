import { Meal } from "../entities/meal";
import { MealRepository } from "../interfaces/meal-repository";

export class getAllMealsByCategory {
    constructor (private mealRepository: MealRepository) {}

    execute(mealName: string): Promise<Meal[] | null> {
        return this.mealRepository.getAllMealsByCategory(mealName);
    }
}