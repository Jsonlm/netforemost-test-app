export class Category {
    constructor (
        public idCategory: string,
        public strCategory: string,
        public strCategoryThumb: string,
        public strCategoryDescription: string,
        public categories: Category[]
    ) {}
}