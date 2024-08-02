export class Meal {
    constructor(
        public idMeal: string,
        public strMeal: string,
        public strCategory: string,
        public meals: Meal
    ) {}
}