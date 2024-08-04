import { GetMealById } from './get-meal-detail-by-id';
import { MealRepository } from '../interfaces/meal-repository';
import { Meal } from '../entities/meal';

describe('getMealById Use Case', () => {
  let useCase: GetMealById;
  let repositorySpy: jasmine.SpyObj<MealRepository>;

  beforeEach(() => {
    repositorySpy = jasmine.createSpyObj('MealRepository', ['getMealById']);
    useCase = new GetMealById(repositorySpy);
  });

  it('should get a meal by ID', async () => {
    const mockMeal: Meal = {
        idMeal: '52772', strCategory: '', strInstructions: '', strMeal: '', strMealThumb: '', strTags: 'hello, othertag'
    };
    repositorySpy.getMealById.and.returnValue(Promise.resolve(mockMeal));

    const result = await useCase.execute('52772');
    expect(result).toEqual(mockMeal);
    expect(repositorySpy.getMealById).toHaveBeenCalledWith('52772');
  });

  it('should handle null result when meal not found', async () => {
    repositorySpy.getMealById.and.returnValue(Promise.resolve(null as unknown as Meal));

    const result = await useCase.execute('nonexistentId');
    expect(result).toBeNull();
  });
});