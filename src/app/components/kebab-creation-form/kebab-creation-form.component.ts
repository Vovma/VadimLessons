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

  createKebabForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    sause: new FormControl(''),
    size: new FormControl(''),
    weight: new FormControl(''),
  });

  onSave() {
    console.log('form', this.createKebabForm.value);
  }
  onClear() {
    this.createKebabForm.reset();
  }
}
