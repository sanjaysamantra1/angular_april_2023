import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContractJobsComponent } from './components/contract-jobs/contract-jobs.component';
import { HomeComponent } from './components/home/home.component';
import { NotfountComponent } from './components/notfount/notfount.component';
import { PermanentJobsComponent } from './components/permanent-jobs/permanent-jobs.component';
import { PhotoDetailsComponent } from './components/photo-details/photo-details.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: '', component: PermanentJobsComponent },
      { path: 'permanent', component: PermanentJobsComponent },
      { path: 'contract', component: ContractJobsComponent },
    ],
  },
  { path: 'products', component: ProductlistComponent,canActivate:[AuthGuard]},
  { path: 'productdetails', component: ProductDetailsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'photodetails/:id', component: PhotoDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
