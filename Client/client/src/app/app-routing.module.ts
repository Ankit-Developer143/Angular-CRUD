import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListingComponent} from '../app/listing/listing.component'
import { ViewComponent } from './listing/view/view.component';


const routes: Routes = [
  {path:'',component:ListingComponent},
  {path:'view/:id',component:ViewComponent}
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
