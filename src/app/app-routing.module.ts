import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { HomeComponent } from './components/home/home.component';
import { NotfountComponent } from './components/notfount/notfount.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'products', component: ProductlistComponent },
  { path: 'photos', component: PhotosComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
