import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kebab-footer',
  templateUrl: './kebab-footer.html',
  styleUrl: './kebab-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabFooter {
  public kebabList = [
    {
      id: 'kebab001',
      name: 'Lamb Kebab Wrap',
      category: 'Fast Food',
      image: 'assets/lamb.jpg',
      description:
        'Grilled lamb kebab wrapped in fresh pita bread with salad and garlic sauce.',
      ingredients: [
        //ngFor
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
      rating: {
        average: 4.7,
        count: 128,
      },
      nutrition: {
        calories: 520,
        fat: '20g',
        carbohydrates: '45g',
        protein: '32g',
      },
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy', 'Garlic'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab001',
      name: 'Chicken Kebab Wrap',
      category: 'Fast Food',
      image: 'assets/chiken.jpg',
      description:
        'Grilled chicken kebab wrapped in fresh pita bread with salad and garlic sauce.',
      ingredients: [
        'Grilled chicken',
        'Pita bread',
        'Lettuce',
        'Tomato',
        'Onion',
        'Garlic sauce',
      ],
      price: 6.99,
      currency: 'EUR',
      weight: '200g',
      availability: 'InStock',
      rating: {
        average: 4.7,
        count: 128,
      },
      nutrition: {
        calories: 520,
        fat: '20g',
        carbohydrates: '45g',
        protein: '32g',
      },
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Dairy', 'Garlic'],
      spicyLevel: 'Mild',
      vegetarian: false,
    },
    {
      id: 'kebab002',
      name: 'Beef Kebab',
      category: 'Fast Food',
      image: 'assets/beef.jpg',
      description:
        'Juicy beef kebab served with garlic sauce and fresh vegetables.',
      ingredients: [
        'Beef',
        'Pita bread',
        'Lettuce',
        'Tomato',
        'Onion',
        'Garlic sauce',
      ],
      price: 32,
      currency: 'PLN',
      weight: '150g',
      availability: 'InStock',
      rating: {
        average: 4.5,
        count: 97,
      },
      nutrition: {
        calories: 580,
        fat: '25g',
        carbohydrates: '40g',
        protein: '35g',
      },
      brand: 'Kebab Express',
      allergens: ['Gluten', 'Garlic'],
      spicyLevel: 'Medium',
      vegetarian: false,
    },
  ];

  public homeWorkKebabElement = {
    name: 'Kebab1',
    price: '27 PLN',
    meat: 'chicken',
    weight: '120g',
    sause: 'ketchup',
    image: 'assets/kebab23.jpg',
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
    this.homeWorkKebabElement = nameWhatYouWant;
  }

  addToCard(nameWhatYouWant: any): void {
    console.log('add to card', nameWhatYouWant);
    if (this.cart[this.homeWorkKebabElement.name]) {
      this.cart[this.homeWorkKebabElement.name]++;
    } else {
      this.cart[this.homeWorkKebabElement.name] = 1;
    }
  }
}
