import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { LoginModule } from 'src/login/login.module';
import { DirectiveComponent } from './components/directive/directive.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ProductlistComponent } from './components/productlist/productlist.component';

@NgModule({
  // components, directives,pipes
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    BodyComponent,
    CategoriesComponent,
    CarouselComponent,
    DatabindingComponent,
    DirectiveComponent,
    UserListComponent,
    ProductlistComponent,
  ],
  // all the dependent modules
  imports: [BrowserModule, AppRoutingModule, FormsModule, LoginModule],
  // Services
  providers: [],
  // Which components to load
  bootstrap: [AppComponent],
})
export class AppModule {}
