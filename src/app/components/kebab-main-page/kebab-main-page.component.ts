import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { KebabCreationFormComponent } from '../kebab-creation-form/kebab-creation-form.component';

export interface testObjectInterface {
  name: string;
  sername: string;
  age: number;
  hasWork: boolean;
}

@Component({
  selector: 'app-my-first-component',
  templateUrl: './kebab-main-page.component.html',
  styleUrl: './kebab-main-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabMainPage {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(KebabCreationFormComponent);
  }

  public kebabList = [
    {
      id: 'kebab001',
      name: 'Lamb Kebab Wrap',
      image: 'assets/lamb.jpg',
      description:
        'Grilled lamb kebab wrapped in fresh pita bread with salad and garlic sauce.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Lettuce',
        'Tomato',
        'Onion',
        'Garlic sauce',
      ],
      price: 6.99,
      currency: 'EUR',
      weight: '150g',
      availability: 'InStock',
      calories: 520,
      fat: '20g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy', 'Garlic'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab002',
      name: 'Spicy Lamb Kebab',
      image: 'assets/lamb.jpg',
      description:
        'Fiery grilled lamb in pita bread with lettuce, onion, and hot chili sauce.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Lettuce',
        'Onion',
        'Chili sauce',
      ],
      price: 7.49,
      currency: 'EUR',
      weight: '155g',
      availability: 'InStock',
      calories: 550,
      fat: '22g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Garlic'],
      spicyLevel: 'Hot',
      vegetarian: false,
    },
    {
      id: 'kebab003',
      name: 'Lamb Kebab Box',
      image: 'assets/lamb.jpg',
      description:
        'Juicy lamb kebab served with fresh salad, pickles, and garlic yogurt sauce.',
      ingredients: [
        'Grilled lamb',
        'Lettuce',
        'Tomato',
        'Pickles',
        'Garlic yogurt sauce',
      ],
      price: 8.99,
      currency: 'EUR',
      weight: '200g',
      availability: 'InStock',
      calories: 680,
      fat: '28g',
      brand: 'Kebab Express',
      allergens: ['Dairy', 'Garlic'],
      spicyLevel: 'Medium',
      vegetarian: false,
    },
    {
      id: 'kebab004',
      name: 'Classic Lamb Doner',
      image: 'assets/lamb.jpg',
      description:
        'Traditional lamb doner meat stuffed in pita bread with fresh veggies.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Tomato',
        'Cucumber',
        'Onion',
      ],
      price: 6.49,
      currency: 'EUR',
      weight: '145g',
      availability: 'InStock',
      calories: 500,
      fat: '19g',
      brand: 'Kebab Express',
      allergens: ['Gluten'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab005',
      name: 'Garlic Lamb Wrap',
      image: 'assets/lamb.jpg',
      description:
        'Flavorful lamb kebab wrap packed with garlic sauce and crispy veggies.',
      ingredients: [
        'Grilled lamb',
        'Tortilla',
        'Garlic sauce',
        'Lettuce',
        'Red cabbage',
      ],
      price: 7.19,
      currency: 'EUR',
      weight: '150g',
      availability: 'InStock',
      calories: 540,
      fat: '21g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Garlic'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab006',
      name: 'Lamb and Cheese Kebab',
      image: 'assets/lamb.jpg',
      description:
        'Grilled lamb combined with melted cheese, wrapped in soft pita.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Cheese',
        'Lettuce',
        'Tomato',
      ],
      price: 7.79,
      currency: 'EUR',
      weight: '160g',
      availability: 'InStock',
      calories: 600,
      fat: '24g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab007',
      name: 'Mint Lamb Kebab',
      image: 'assets/lamb.jpg',
      description:
        'Fresh grilled lamb with a refreshing mint yogurt dressing and salad.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Mint yogurt sauce',
        'Lettuce',
        'Cucumber',
      ],
      price: 7.49,
      currency: 'EUR',
      weight: '155g',
      availability: 'InStock',
      calories: 530,
      fat: '20g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab008',
      name: 'Lamb Supreme Wrap',
      image: 'assets/lamb.jpg',
      description:
        'Rich lamb kebab with a double layer of sauce, cheese, and pickles.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Cheese',
        'Pickles',
        'Garlic sauce',
        'Chili sauce',
      ],
      price: 8.49,
      currency: 'EUR',
      weight: '170g',
      availability: 'InStock',
      calories: 670,
      fat: '26g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy', 'Garlic'],
      spicyLevel: 'Medium',
      vegetarian: false,
    },
    {
      id: 'kebab009',
      name: 'Lamb Salad Bowl',
      image: 'assets/lamb.jpg',
      description:
        'Healthy salad bowl topped with grilled lamb and a light garlic dressing.',
      ingredients: [
        'Grilled lamb',
        'Lettuce',
        'Cucumber',
        'Tomato',
        'Garlic dressing',
      ],
      price: 6.99,
      currency: 'EUR',
      weight: '140g',
      availability: 'InStock',
      calories: 450,
      fat: '17g',
      brand: 'Kebab Express',
      allergens: ['Garlic'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab010',
      name: 'Deluxe Lamb Kebab',
      image: 'assets/lamb.jpg',
      description:
        'Luxury lamb kebab experience with cheese, mint, chili, and extra sauce.',
      ingredients: [
        'Grilled lamb',
        'Pita bread',
        'Cheese',
        'Mint sauce',
        'Chili sauce',
      ],
      price: 9.49,
      currency: 'EUR',
      weight: '180g',
      availability: 'InStock',
      calories: 720,
      fat: '30g',
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy'],
      spicyLevel: 'Medium',
      vegetarian: false,
    },
  ];

  public selectedElement = {
    id: 'kebab001',
    name: 'Lamb Kebab Wrap',
    image: 'assets/lamb.jpg',
    description:
      'Grilled lamb kebab wrapped in fresh pita bread with salad and garlic sauce.',
    ingredients: [
      'Grilled lamb',
      'Pita bread',
      'Lettuce',
      'Tomato',
      'Onion',
      'Garlic sauce',
    ],
    price: 6.99,
    currency: 'EUR',
    weight: '150g',
    availability: 'InStock',
    calories: 520,
    fat: '20g',
    brand: 'Kebab Express',
    allergens: ['Gluten', 'Dairy', 'Garlic'],
    spicyLevel: 'Mild',
    vegetarian: false,
  };

  // nameWhatYouWant -> Kebab elemnt
  // example
  // {
  //   name: 'Kebab3',
  //   price: '38 PLN',
  //   meet: 'Korowa',
  //   weight: '120g',
  //   sous: 'Mayonez',
  // },
  public cart: { [key: string]: number } = {};

  openProduct(nameWhatYouWant: any): void {
    console.log('open product', nameWhatYouWant);
    this.selectedElement = nameWhatYouWant;
  }

  addToCard(nameWhatYouWant: any): void {
    console.log('add to card', nameWhatYouWant);
    if (this.cart[this.selectedElement.name]) {
      this.cart[this.selectedElement.name]++;
    } else {
      this.cart[this.selectedElement.name] = 1;
    }
  }
}
