import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { max } from 'rxjs';

export interface testObjectInterface {
  name: string;
  sername: string;
  age: number;
  hasWork: boolean;
}

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrl: './my-first-component.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})

// number -> 1,323435,435345,
// string -> 'rjghergjkehgrjkerh'
// boolean -> true / false
export class MyFirstComponentComponent implements OnInit {
  public counter = 50;

  public name!: string;
  public sername!: string;
  public age!: number;
  public hasWork!: boolean;

  public myFirstArray: number[] = [1, 3, 5, 100, 7, 8, 8, 9];

  public testObject: testObjectInterface = {
    name: 'Vova',
    sername: 'Mal',
    age: 12,
    hasWork: true,
  };

  public userList: testObjectInterface[] = [
    {
      name: 'Vova',
      sername: 'Mal',
      age: 12,
      hasWork: true,
    },
    {
      name: 'Sasha',
      sername: 'Mal',
      age: 19,
      hasWork: false,
    },
    {
      name: 'David',
      sername: 'Mal',
      age: 22,
      hasWork: true,
    },
    {
      name: 'Vova',
      sername: 'Mal',
      age: 12,
      hasWork: true,
    },
    {
      name: 'Sasha',
      sername: 'Mal',
      age: 19,
      hasWork: false,
    },
    {
      name: 'David',
      sername: 'Mal',
      age: 22,
      hasWork: true,
    },
  ];

  ngOnInit(): void {
    this.forArrayExample();
  }

  addNewName(nameFromOur: string): void {
    this.name = nameFromOur;
  }

  arrayFun(): void {
    // this.arrayAfterManipulation = this.myFirstArray.filter((el) => el === 8);
  }

  forArrayExample() {
    let maxValue = 0;
    this.myFirstArray.forEach((el) => {
      if (el > maxValue) {
        maxValue = el;
      }
    });

    console.log('max value', maxValue);

    console.log('max', Math.max(...this.myFirstArray));

    console.log('reverse', this.myFirstArray.reverse());
    console.log(
      'find',
      this.myFirstArray.find((el) => el === 8)
    );
    console.log('max', Math.max(...this.myFirstArray));
  }

  showConsoleLog(text: string): void {
    console.log('test log', text);
  }

  counterFun(): void {
    this.counter += 1;
  }
}
