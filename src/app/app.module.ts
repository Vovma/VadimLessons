import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MyFirstComponentComponent } from './components/my-first-component/my-first-component.component';
import { VadimComponent2Component } from './components/vadim-component-2/vadim-component-2.component';
import { VadimComponent1Component } from './components/vadim-component-1/vadim-component-1.component';
import { KebabMenuComponent } from './components/kebab-menu/kebab-menu.component';
import { KebabFooter } from './components/kebab-footer/kebab-footer';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponentComponent,
    VadimComponent1Component,
    VadimComponent2Component,
    KebabMenuComponent,
    KebabFooter,
  ],
  imports: [BrowserModule],
  exports: [MyFirstComponentComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
