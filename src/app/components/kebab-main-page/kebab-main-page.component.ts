import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
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
  constructor(public dialog: MatDialog, private cd: ChangeDetectorRef) {
    this.kebabList = JSON.parse(localStorage.getItem('kebabList') || '[]');
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(KebabCreationFormComponent);
    dialogRef.afterClosed().subscribe((formData) => {
      console.log('close', formData);
      this.kebabList.push(formData);
      console.log('kebabList', this.kebabList);

      localStorage.setItem('kebabList', JSON.stringify(this.kebabList));

      this.cd.markForCheck();
    });
  }
  public addToCardList: any = [];

  public kebabList: any = [];

  public selectedElement: any = {
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
    console.log('kebab', this.selectedElement);
  }

  addToCard(): void {
    this.addToCardList.push(this.selectedElement);
    localStorage.setItem('addToCardList', JSON.stringify(this.addToCardList));
  }
}
