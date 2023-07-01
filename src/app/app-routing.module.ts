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
import { AuthGuardChildGuard } from './guards/auth-guard-child.guard';
import { AuthGuard } from './guards/auth.guard';
import { HaschangesGuard } from './guards/haschanges.guard';
import { PhotosResolverService } from './services/photos-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'aboutus',
    component: AboutusComponent,
    canDeactivate: [HaschangesGuard],
  },
  {
    path: 'careers',
    component: CareersComponent,
    children: [
      { path: 'permanent', component: PermanentJobsComponent },
      {
        path: 'contract',
        component: ContractJobsComponent,
        canActivate: [AuthGuard],
      },
    ],
    // canActivateChild: [AuthGuardChildGuard],
  },
  {
    path: 'products',
    component: ProductlistComponent,
    canActivate: [AuthGuard],
  },
  { path: 'productdetails', component: ProductDetailsComponent },
  {
    path: 'photos',
    component: PhotosComponent,
    resolve: { myPhotos: PhotosResolverService },
  },
  { path: 'photodetails/:id', component: PhotoDetailsComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: NotfountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
