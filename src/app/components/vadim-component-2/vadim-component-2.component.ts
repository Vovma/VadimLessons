import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-vadim-component-2', //служит для того чтобы показать его в хтмл <app-vadim-component-2></app-vadim-component-2>
  templateUrl: './vadim-component-2.component.html', // связка между тп и хтмл
  styleUrl: './vadim-component-2.component.scss', // связка между тп и css
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
// VadimComponent2Component это наш компонент он должен иметь свое тело {} в этих скобках должна находиться вся логика этого компонента
export class VadimComponent2Component {
  public counter: number = 50; // каунтер это переменная по типу: число изначальная равная 50, паблик означает что я могу использовать ее в хтмл

  public truth: boolean = true;

  public string: string = 'green';

  public date: Date | string = 'class';

  public whatever: any = 'class';

  public multCounter() {
    // this.counter = this.counter * 2;
    this.multCounter2();
    this.mathRandomReseter(100);
  }

  public divideCounter() {
    this.counter = this.counter / 2;
  }

  public resetCounter(resetCounterValue: number) {
    this.counter = resetCounterValue;
  }
  private multCounter2() {
    this.counter = this.counter * 2;
  }

  public mathRandomReseter(mathRandomReseterValue: number) {
    this.counter = Math.random() * mathRandomReseterValue;
  }
}
