import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vadim-component-1',
  templateUrl: './vadim-component-1.component.html',
  styleUrl: './vadim-component-1.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class VadimComponent1Component {
  public counter: number = 50;

  public addCounter() {
    this.counter = this.counter + 1;
  }

  public minusCounter() {
    this.counter = this.counter - 1;
  }
}
