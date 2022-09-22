import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DavidViewComponent } from './david-view/david-view.component';
import { EasterEggErrorComponent } from './easter-egg-error/easter-egg-error.component';
import { HalViewComponent } from './hal-view/hal-view.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'error', component: EasterEggErrorComponent },
  { path: 'davidView', component: DavidViewComponent },
  { path: 'halView', component: HalViewComponent },
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
