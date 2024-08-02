import { Meal } from "../entities/meal";
import { MealRepository } from "../interfaces/meal-repository";

export class getAllMealsById {
    constructor (private mealRepository: MealRepository) {}

    execute(id: string): Promise<Meal | null> {
        return this.mealRepository.getAllMealsById(id);
    }
}