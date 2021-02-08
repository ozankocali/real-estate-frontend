import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdDetailsComponent } from './ad-details/ad-details.component';
import { AdListComponent } from './ad-list/ad-list.component';
import { CreateAdComponent } from './create-ad/create-ad.component';
import { UpdateAdComponent } from './update-ad/update-ad.component';

const routes: Routes = [
  {path:'ads',component:AdListComponent},
  {path:'',redirectTo:'ads',pathMatch:'full'},
  {path:'create-ad',component:CreateAdComponent},
  {path:"update-ad/:id",component:UpdateAdComponent},
  {path:"ad-details/:id",component:AdDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
