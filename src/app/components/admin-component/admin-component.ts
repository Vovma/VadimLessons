import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-kebab-creation-form',
  templateUrl: './admin-component.html',
  styleUrl: './admin-component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AdminComponent {
  contacts = [];
  mockList = [
    {
      name: 'Vova1',
      email: 'Vadym1',
      phone: '96040',
      message: 'fdfdf',
    },
    {
      name: 'Vova2',
      email: 'Vadym2',
      phone: '96040',
      message: 'fdfdf',
    },
    {
      name: 'Vova3',
      email: 'Vadym3',
      phone: '96040',
      message: 'fdfdf',
    },
  ];
}
