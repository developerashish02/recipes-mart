import { Ingredients } from './../shared/ingredients.modal';
export class Recipes {
  public name!: string;
  public description!: string;
  public imagePath!: string;
  public ingredients: Ingredients[];

  constructor(
    name: string,
    des: string,
    imagePath: string,
    ingredients: Ingredients[]
  ) {
    this.name = name;
    this.description = des;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
