import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {SubpageComponent} from "./subpage/subpage.component";

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'gallery', component: SubpageComponent },
  { path: 'contact', component: SubpageComponent },
  { path: 'aboutus', component: SubpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
