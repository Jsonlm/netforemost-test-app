import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/core/entities/meal';
import { MealService } from 'src/app/core/services/meal.service';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

  public idMeal!: string;
  public mealFound!: Meal;
  public finalData:any;
  public tags: string[] = [];
  public imgLink: string = '';

  constructor(private activatedRoute: ActivatedRoute, private mealService: MealService) { }

  async ngOnInit() {
    this.idMeal = String(this.activatedRoute.snapshot.paramMap.get('id'));
    this.mealFound = await this.mealService.fetchMealsById(this.idMeal);
    this.finalData = this.mealFound.meals;

    if (this.finalData[0].strTags === null) {
      this.tags = []
    } else {
      this.tags = String(this.finalData[0].strTags).split(',');
    }
  }
}
