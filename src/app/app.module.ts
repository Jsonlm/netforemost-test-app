import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MEAL_REPOSITORY_TOKEN } from './core/interfaces/meal-repository';
import { MealRepositoryImpl } from './infrastructure/data/meal-repository-impl';
import { MealService } from './core/services/meal.service';
import { provideHttpClient } from '@angular/common/http';
import { CategoryService } from './core/services/category.service';
import { CATEGORY_REPOSITORY_TOKEN } from './core/interfaces/category-repository';
import { CategoryRepositoryImpl } from './infrastructure/data/category-repository-impl';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), RouterModule.forRoot([]), AppRoutingModule],
  providers: [
    provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    { provide: MEAL_REPOSITORY_TOKEN, useClass: MealRepositoryImpl },
    { provide: CATEGORY_REPOSITORY_TOKEN, useClass: CategoryRepositoryImpl },
    MealService, CategoryService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
