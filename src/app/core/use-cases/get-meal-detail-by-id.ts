import { Meal } from "../entities/meal";
import { MealRepository } from "../interfaces/meal-repository";

export class GetMealById {
    constructor (private mealRepository: MealRepository) {}

    execute(id: string): Promise<Meal | null | undefined> {
        return this.mealRepository.getMealById(id);
    }
}