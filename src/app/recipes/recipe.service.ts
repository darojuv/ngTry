import {Recipe} from './recipe.model';

export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('A Test Recipe',
      'This is simply a path',
      'http://maxpixel.freegreatpicture.com/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg'),
    new Recipe('2 Test Recipe',
      'This is simply 2 path',
      'http://maxpixel.freegreatpicture.com/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
