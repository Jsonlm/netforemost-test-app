import { Meal } from "../entities/meal";
import { MealRepository } from "../interfaces/meal-repository";

export class GetAllMealsByCategory {
    constructor (private mealRepository: MealRepository) {}

    execute(mealName: string): Promise<Meal[] | null> {
        return this.mealRepository.getAllMealsByCategory(mealName);
    }
}