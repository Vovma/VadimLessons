import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kebab-creation-form',
  templateUrl: './kebab-creation-form.component.html',
  styleUrl: './kebab-creation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabCreationFormComponent {
  constructor() {}
  public kebabIngredientsList = [
    'Chicken',
    'Beef',
    'Lamb',
    'Turkey',
    'Pita bread',
    'Tortilla',
    'Lettuce',
    'Tomato',
    'Cucumber',
    'Onion',
    'Garlic sauce',
    'Yogurt sauce',
    'Chili sauce',
    'Pickles',
    'Red cabbage',
    'Carrot',
    'Cheese',
    'Parsley',
    'Mint',
    'Olive oil',
  ];

  public kebabAllergensList = [
    'Peanuts',
    'Tree nuts',
    'Milk',
    'Eggs',
    'Wheat',
    'Soy',
    'Fish',
    'Shellfish',
    'Sesame',
    'Mustard',
    'Celery',
    'Lupin',
    'Sulfites',
    'Gluten',
    'Corn',
    'Beef',
    'Pork',
    'Chicken',
    'Latex',
    'Penicillin',
    'Dust mites',
    'Pollen',
    'Mold',
    'Animal dander',
    'Insect stings',
    'Nickel',
    'Fragrances',
    'Avocado',
    'Banana',
    'Kiwi',
  ];

  public currencyList = ['PLN', 'USD', 'EUR'];

  createKebabForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    currency: new FormControl(''),
    weight: new FormControl(''),
    price: new FormControl(''),
    sause: new FormControl(''),
    size: new FormControl(''),
    ingredients: new FormControl(''),
    availability: new FormControl(''),
    rating: new FormControl(''),
    nutrition: new FormControl(''),
    brand: new FormControl(''),
    allergens: new FormControl(''),
    spicyLevel: new FormControl(''),
    vegetarian: new FormControl(''),
    description: new FormControl(''),
    calories: new FormControl(''),
    fat: new FormControl(''),
  });

  onSave() {
    console.log('form', this.createKebabForm.value);
  }
  onClear() {
    this.createKebabForm.reset();
  }
}
