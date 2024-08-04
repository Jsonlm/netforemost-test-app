import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Meal } from '../../core/entities/meal';
import { MealRepository } from '../../core/interfaces/meal-repository';
import { firstValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MealRepositoryImpl implements MealRepository {

  constructor(private http: HttpClient) { }

  async getMealById(id: string ): Promise<Meal> {
    console.log(`${environment.api}lookup.php?i=${id}`);
    
    return firstValueFrom(this.http.get<Meal>(`${environment.api}lookup.php?i=${id}`))
      .then(response => {
        if (response) {
          return response;
        } else {
          throw new Error('Plato no encontrado'); 
        }
      })
      .catch(error => {
        throw new Error('Plato no encontrado'); 
      });
  }

  async getAllMealsByName(mealName: string): Promise<Meal[] | null> {
    return firstValueFrom(this.http.get<Meal[]>(`${environment.api}search.php?s=${mealName}`))
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

  getAllMealsByCategory(mealName: string): Promise<Meal[] | null> {
    return firstValueFrom(this.http.get<Meal[]>(`${environment.api}search.php?s=${mealName}`))
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