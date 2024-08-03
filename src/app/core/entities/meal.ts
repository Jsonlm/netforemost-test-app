export class Meal {
    constructor(
        public idMeal: string,
        public strMeal: string,
        public strMealThumb: string,
        public strCategory: string,
        public strTags: string,
        public strIngredients: string[],
        public strInstructions: string[],
        public meals: Meal
    ) {}
}