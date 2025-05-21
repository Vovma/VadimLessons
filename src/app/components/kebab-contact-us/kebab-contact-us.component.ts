import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kebab-creation-form',
  templateUrl: './kebab-contact-us.component.html',
  styleUrl: './kebab-contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabContactUsComponent {
  FormContactUs = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl(''),
    Phone: new FormControl(''),
    Message: new FormControl(''),
  });
  onSave(): void {
    console.log(this.FormContactUs.value);
  }
}
