import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoryRepository } from '../../core/interfaces/category-repository';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from 'src/app/core/entities/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryRepositoryImpl implements CategoryRepository {
    
    constructor(private http: HttpClient) {}

    getAllCategories(): Promise<Category[]> {
        return firstValueFrom(this.http.get<Category[]>(`${environment.api}categories.php`))
        .then(response => {
          if (response) {
            return response; 
          } else {
            return [];
          }
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
          return [];
        });
    }
}