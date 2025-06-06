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
export class AdminComponent {}
