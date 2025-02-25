import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class MyFirstComponentComponent implements OnInit {
  public counter = 0;

  // pu

  ngOnInit(): void {
    this.forArrayExample();
  }

  arrayFun(): void {
    // this.arrayAfterManipulation = this.myFirstArray.filter((el) => el === 8);
  }

  forArrayExample() {
    // this.myFirstArray.forEach((el) => {
    //   console.log('every elemnt', el);
    // });
    // console.log('reverse', this.myFirstArray.reverse());
    // console.log(
    //   'find',
    //   this.myFirstArray.find((el) => el === 8)
    // );
    // console.log('max', Math.max(...this.myFirstArray));
  }

  showConsoleLog(text: string): void {
    console.log('test log', text);
  }

  counterFun(): void {
    this.counter += 1;
  }
}
