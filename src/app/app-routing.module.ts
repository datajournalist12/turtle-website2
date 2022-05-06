import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConservationComponent } from './pages/conservation/conservation.component';
import { ProblemsComponent } from './pages/problems/problems.component';

import { TestpageComponent } from './testpage/testpage.component';
import { MapComponent } from './map/map.component';
import { DataComponent } from './data/data.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conservation', component: ConservationComponent},
  {path: 'problems', component: ProblemsComponent},
  {path: 'test', component: TestpageComponent},
  {path: 'map', component: MapComponent},
  {path: 'data', component: DataComponent},
  {path: 'about-us', component: AboutusComponent},
  {path: 'newsletter', component: NewsletterComponent},
  {path: 'contact', component: ContactUsComponent},
  {path: 'shop', component: ShopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
