import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kebab-creation-form',
  templateUrl: './kebab-contact-us.component.html',
  styleUrl: './kebab-contact-us.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabContactUsComponent {
  public loading = false;

  constructor(private cd: ChangeDetectorRef) {}

  FormContactUs = new FormGroup({
    Name: new FormControl(''),
    Email: new FormControl('', [Validators.email, Validators.required]),
    Phone: new FormControl('', Validators.required),
    Message: new FormControl('', Validators.required),
  });
  onSave(): void {
    console.log(this.FormContactUs.value);
    console.log('FormTestInvalid', this.FormContactUs.valid);
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this.cd.detectChanges();
    }, 2000);
  }
}
