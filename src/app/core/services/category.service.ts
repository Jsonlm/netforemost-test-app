import { Inject, Injectable } from '@angular/core';
import { CATEGORY_REPOSITORY_TOKEN, CategoryRepository } from '../interfaces/category-repository';
import { Category } from '../entities/category';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    @Inject(CATEGORY_REPOSITORY_TOKEN) 
    private categoryRepository: CategoryRepository
  ) {}

  async fetchCategories(): Promise<Category[] | []> {
    try {
      return await this.categoryRepository.getAllCategories()  || [];
    } catch (error) {
      console.error('Error fetching categories:', error);
      return [];
    }
  }
}
