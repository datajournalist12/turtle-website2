import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ConservationComponent } from './pages/conservation/conservation.component';
import { ProblemsComponent } from './pages/problems/problems.component';

import { TestpageComponent } from './testpage/testpage.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'conservation', component: ConservationComponent},
  {path: 'problems', component: ProblemsComponent},
  {path: 'test', component: TestpageComponent},
  {path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
