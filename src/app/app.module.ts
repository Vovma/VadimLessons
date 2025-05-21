import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';

import { AppComponent } from './app.component';

import { VadimComponent2Component } from './components/vadim-component-2/vadim-component-2.component';
import { VadimComponent1Component } from './components/vadim-component-1/vadim-component-1.component';
import { KebabMenuComponent } from './components/kebab-menu/kebab-menu.component';
import { KebabFooter } from './components/kebab-footer/kebab-footer';
import { KebabCreationFormComponent } from './components/kebab-creation-form/kebab-creation-form.component';
import { KebabMainPage } from './components/kebab-main-page/kebab-main-page.component';
import { KebabBasketComponent } from './components/kebab-basket/kebab-basket.component';
import { AppRoutingModule } from './app.routes';
import { KebabContactUsComponent } from './components/kebab-contact-us/kebab-contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    KebabMainPage,
    VadimComponent1Component,
    VadimComponent2Component,
    KebabMenuComponent,
    KebabFooter,
    KebabCreationFormComponent,
    KebabBasketComponent,
    KebabContactUsComponent,
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    AppRoutingModule,
  ],
  exports: [KebabMainPage],
  bootstrap: [AppComponent],
})
export class AppModule {}
