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
import { DiseaseComponent } from './problems/disease/disease.component';
import { EndangeredComponent } from './problems/endangered/endangered.component';
import { HotComponent } from './problems/hot/hot.component';
import { NeglectComponent } from './problems/neglect/neglect.component';
import { PopulationsComponent } from './problems/populations/populations.component';
import { RelocationComponent } from './problems/relocation/relocation.component';

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
  {path: 'shop', component: ShopComponent},
  {path: 'disease', component: DiseaseComponent},
  {path: 'endangered', component: EndangeredComponent},
  {path: 'hot', component: HotComponent},
  {path: 'neglect', component: NeglectComponent},
  {path: 'populations', component: PopulationsComponent},
  {path: 'relocation', component: RelocationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
