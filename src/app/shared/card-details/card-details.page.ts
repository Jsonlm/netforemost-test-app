import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/core/entities/meal';
import { MealService } from 'src/app/core/services/meal.service';
import { HomePage } from 'src/app/home/home.page';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  public idMeal!: string;
  public mealFound!: Meal;
  public finalData:any;

  constructor(private activatedRoute: ActivatedRoute, private mealService: MealService) { }

  async ngOnInit() {
    this.idMeal = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.mealFound = await this.mealService.fetchMealsById(this.idMeal);
    this.finalData = this.mealFound.meals;
    console.log(this.finalData);
    
    
  }

}
