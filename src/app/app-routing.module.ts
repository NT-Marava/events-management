import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HotelDetailComponent } from './components/hotel-detail/hotel-detail.component';
import { HotelsComponent } from './components/hotels/hotels.component';



const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'hotel-detail', component: HotelDetailComponent },
  { path: 'hotel-list', component: HotelsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
