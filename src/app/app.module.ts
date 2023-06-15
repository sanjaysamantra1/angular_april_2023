import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

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
import { GreetComponent } from './components/greet/greet.component';
import { MymodalComponent } from './components/mymodal/mymodal.component';
import { EmployeeCrudComponent } from './components/employee-crud/employee-crud.component';
import { NumberonlyDirective } from './directives/numberonly.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickcountDirective } from './directives/clickcount.directive';
import { ZoomDirective } from './directives/zoom.directive';
import { PipesComponent } from './components/pipes/pipes.component';
import { RemainingPipe } from './custom-pipes/remaining.pipe';
import { MysortPipe } from './custom-pipes/mysort.pipe';
import { ParentComponent } from './components/parent/parent.component';
import { Child1Component } from './components/child1/child1.component';
import { Child2Component } from './components/child2/child2.component';
import { MathComponent } from './components/math/math.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeAddComponent } from './components/employee-add/employee-add.component';
import { EmployeeService } from './services/employee.service';

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
    GreetComponent,
    MymodalComponent,
    EmployeeCrudComponent,
    NumberonlyDirective,
    HighlightDirective,
    ClickcountDirective,
    ZoomDirective,
    PipesComponent,
    RemainingPipe,
    MysortPipe,
    ParentComponent,
    Child1Component,
    Child2Component,
    MathComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
  ],
  // all the dependent modules
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LoginModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
  ],
  // Services
  providers: [],
  // Which components to load
  bootstrap: [AppComponent],
})
export class AppModule {}
