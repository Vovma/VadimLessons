import { RouterModule, Routes } from '@angular/router';
import { KebabBasketComponent } from './components/kebab-basket/kebab-basket.component';
import { NgModule } from '@angular/core';
import { KebabMainPage } from './components/kebab-main-page/kebab-main-page.component';
import { KebabContactUsComponent } from './components/kebab-contact-us/kebab-contact-us.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  //   { path: '**', component: KebabMainPage },
  { path: '', redirectTo: '/contact-us', pathMatch: 'full' },
  // { path: '**', component: KebabMainPage },
  { path: 'home', component: KebabMainPage },
  { path: 'basket', component: KebabBasketComponent },
  { path: 'contact-us', component: KebabContactUsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
