import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kebab-menu',
  templateUrl: './kebab-menu.component.html',
  styleUrl: './kebab-menu.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabMenuComponent {}
