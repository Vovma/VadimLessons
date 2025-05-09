import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kebab-creation-form',
  templateUrl: './kebab-creation-form.component.html',
  styleUrl: './kebab-creation-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabCreationFormComponent {
  constructor(private dialogRef: MatDialogRef<KebabCreationFormComponent>) {}

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
  public sauseList = [
    'Garlic sauce',
    'Spicy chili sauce',
    'Yogurt-mint sauce',
    'Tzatziki',
    'BBQ sauce',
    'Sweet and sour sauce',
    'Curry sauce',
    'Tahini sauce',
    'White sauce',
    'Hot sriracha mayo',
    'Cheese sauce',
    'Hummus',
    'Mustard sauce',
    'Tomato ketchup',
    'Smoky paprika sauce',
  ];
  public ratingList = [
    '⭐ 1 - Very poor',
    '⭐⭐ 2 - Poor',
    '⭐⭐⭐ 3 - Average',
    '⭐⭐⭐⭐ 4 - Good',
    '⭐⭐⭐⭐⭐ 5 - Excellent',
  ];

  public nutritionList = [
    'High Protein',
    'Low Fat',
    'Low Carb',
    'Rich in Fiber',
    'Gluten Free',
    'Lactose Free',
    'Vegan Friendly',
    'Vegetarian',
    'Keto Friendly',
    'Contains Omega-3',
    'Rich in Vitamins',
    'High Calorie',
    'Low Calorie',
  ];
  public spicyLevelList = [
    'Not Spicy',
    'Mild',
    'Medium',
    'Spicy🌶️',
    'Extra Spicy🌶️🌶️',
    'Nuclear 🌶️🌶️🌶️',
  ];
  public brandList = [
    'BerlinKebab',
    'Kebab Master',
    'Grill & Wrap',
    'Kebab Bros',
    'Doner King',
    'Urban Kebab Co.',
  ];
  public vegetarianList = [
    'Yes',
    'No',
    'Vegan',
    'Vegetarian with dairy',
    'Vegetarian with eggs',
  ];
  public caloriesList = [
    'Less than 300 kcal',
    '300–500 kcal',
    '500–700 kcal',
    '700–900 kcal',
    'More than 900 kcal',
  ];
  public fatList = [
    'Low fat (under 5g)',
    'Medium fat (5g–15g)',
    'High fat (over 15g)',
  ];

  createKebabForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    currency: new FormControl(''),
    weight: new FormControl(''),
    price: new FormControl(''),
    sause: new FormControl(''),
    size: new FormControl(''),
    ingredients: new FormControl(''),
    image: new FormControl(''),
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
    this.dialogRef.close(this.createKebabForm.value);

    // Why are do this ?

    // const kebab = [
    //   this.createKebabForm.value.id,
    //   this.createKebabForm.value.name,
    //   this.createKebabForm.value.price,
    //   this.createKebabForm.value.currency,
    //   this.createKebabForm.value.size,
    //   this.createKebabForm.value.weight,
    //   this.createKebabForm.value.ingredients,
    //   this.createKebabForm.value.allergens,
    //   this.createKebabForm.value.description,
    //   this.createKebabForm.value.sause,
    //   this.createKebabForm.value.nutrition,
    //   this.createKebabForm.value.spicyLevel,
    //   this.createKebabForm.value.calories,
    //   this.createKebabForm.value.vegetarian,
    //   this.createKebabForm.value.brand,
    //   this.createKebabForm.value.rating,
    //   this.createKebabForm.value.fat,
    //   this.createKebabForm.value.image,
    // ];

    // const stored = localStorage.getItem('kebabs');
    // const kebabs: any[] = stored ? JSON.parse(stored) : [];
    // kebabs.push(kebab);
    // localStorage.setItem('kebabs', JSON.stringify(kebabs));
    // const storedKebabs = localStorage.getItem('kebabs');
    // const kebabList: any[] = storedKebabs ? JSON.parse(storedKebabs) : [];
    // console.log(kebabList);
  }

  onClear() {
    this.createKebabForm.reset();
  }
}
