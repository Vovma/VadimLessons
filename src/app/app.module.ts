import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { VadimComponent2Component } from './components/vadim-component-2/vadim-component-2.component';
import { VadimComponent1Component } from './components/vadim-component-1/vadim-component-1.component';
import { KebabMenuComponent } from './components/kebab-menu/kebab-menu.component';
import { KebabFooter } from './components/kebab-footer/kebab-footer';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    VadimComponent1Component,
    VadimComponent2Component,
    KebabMenuComponent,
    KebabFooter,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
  ],
  exports: [MyFirstComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
