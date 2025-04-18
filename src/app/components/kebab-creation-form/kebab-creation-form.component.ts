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
    ' - Grilled lamb',
    ' - Pita bread',
    ' - Lettuce',
    ' - Tomato',
    ' - Onion',
    ' - Garlic sauce',
  ];
  public kebabIngredientsListBeef = [
    ' - Beef',
    ' - Pita bread',
    ' - Lettuce',
    ' - Tomato',
    ' - Onion',
    ' - Garlic sauce',
  ];
  public kebabIngredientsListChicken = [
    ' - Grilled chicken',
    ' - Pita bread',
    ' - Lettuce',
    ' - Tomato',
    ' - Onion',
    ' - Garlic sauce',
  ];
  public kebabAllergensListChicken = ['Gluten', 'Dairy', 'Garlic'];
  public kebabAllergensListBeef = ['Gluten', 'Garlic'];
  public kebabAllergensListLamb = ['Gluten', 'Dairy', 'Garlic'];

  createKebabForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    sause: new FormControl(''),
    size: new FormControl(''),
    weight: new FormControl(''),
    ingredients: new FormControl(''),
    allergens: new FormControl(''),
  });

  onSave() {
    console.log('form', this.createKebabForm.value);
  }
  onClear() {
    this.createKebabForm.reset();
  }
}
