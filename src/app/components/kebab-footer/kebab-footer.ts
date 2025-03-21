import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-kebab-footer',
  templateUrl: './kebab-footer.html',
  styleUrl: './kebab-footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class KebabFooter {}
