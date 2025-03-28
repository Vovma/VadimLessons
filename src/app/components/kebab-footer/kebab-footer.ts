import { ChangeDetectionStrategy, Component } from '@angular/core';

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
      meet: 'Chicken',
      weight: '120g',
      sous: 'Ketchup',
    },
    {
      name: 'Kebab2',
      price: '30 PLN',
      meet: 'Chicken',
      weight: '120g',
      sous: 'Ketchup',
    },
    {
      name: 'Kebab3',
      price: '38 PLN',
      meet: 'Korowa',
      weight: '120g',
      sous: 'Mayonez',
    },
  ];

  public homeWorkKebabElement = {
    name: 'Kebab1',
    price: '27 PLN',
    meet: 'chicken',
    weight: '120g',
    sous: 'ketchup',
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
  openProduct(nameWhatYouWant: any): void {
    console.log('open product', nameWhatYouWant);
    this.homeWorkKebabElement = nameWhatYouWant;
  }

  addToCard(nameWhatYouWant: any): void {
    console.log('add to card', nameWhatYouWant);
  }
}
