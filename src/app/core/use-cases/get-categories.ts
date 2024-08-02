import { Category } from "../entities/category";
import { CategoryRepository } from "../interfaces/category-repository";

export class GetCategories {
    constructor (private categoryRepository: CategoryRepository) {}

    execute(): Promise<Category[] | null> {
        return this.categoryRepository.getAllCategories();
    }
}