import { Meal } from "./meal";

describe('Meal Entity', () => {
  it('should create an instance with correct properties', () => {
    const mealData: Meal = {
      idMeal: '123',
      strMeal: 'Spaghetti Carbonara',
      strCategory: 'Pasta',
      strInstructions: 'Cook pasta and mix with sauce.',
      strMealThumb: 'image_url',
      strTags: 'Italian,Quick',
    };

    const meal = new Meal(
      mealData.idMeal,
      mealData.strMeal, 
      mealData.strCategory, 
      mealData.strInstructions,
      mealData.strTags, 
      mealData.strMealThumb
    );

    expect(meal.idMeal).toBe(mealData.idMeal);
    expect(meal.strMeal).toBe(mealData.strMeal);
    expect(meal.strCategory).toBe(mealData.strCategory);
    expect(meal.strInstructions).toBe(mealData.strInstructions);
    expect(meal.strMealThumb).toBe(mealData.strMealThumb);
    expect(meal.strTags).toBe(mealData.strTags);
  });

  it('should handle undefined properties gracefully', () => {
    const meal = new Meal(undefined, undefined, undefined, undefined, undefined, undefined);

    expect(meal.idMeal).toBeUndefined();
    expect(meal.strMeal).toBeUndefined();
    expect(meal.strCategory).toBeUndefined();
    expect(meal.strInstructions).toBeUndefined();
    expect(meal.strMealThumb).toBeUndefined();
    expect(meal.strTags).toBeUndefined();
  });
});