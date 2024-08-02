import { InjectionToken } from "@angular/core";
import { Category } from "../entities/category";
export const CATEGORY_REPOSITORY_TOKEN = new InjectionToken<CategoryRepository>('CategoryRepository');

export interface CategoryRepository {
    getAllCategories(): Promise<Category[]>;
}