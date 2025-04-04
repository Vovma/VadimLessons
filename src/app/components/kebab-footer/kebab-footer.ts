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
      name: 'Kebab1',
      price: '27 PLN',
      meat: 'Chicken',
      weight: '120g',
      sause: 'Ketchup',
      img: 'assets/chiken.jpg',
    },
    {
      name: 'Kebab2',
      price: '32 PLN',
      meat: 'Beef',
      weight: '150g',
      sause: 'Garlic',
      img: 'assets/beef.jpg',
    },
    {
      name: 'Kebab3',
      price: '38 PLN',
      meat: 'Lamb',
      weight: '170g',
      sause: 'Mayonnaise',
      img: 'assets/lamb.jpg',
    },
  ];

  public homeWorkKebabElement = {
    name: 'Kebab1',
    price: '27 PLN',
    meat: 'chicken',
    weight: '120g',
    sause: 'ketchup',
    img: 'assets/kebab23.jpg',
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
