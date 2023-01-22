import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AddNewCategoriesComponent } from './add-new-categories/add-new-categories.component';
import { LayoutCategoriesComponent } from './layout-categories/layout-categories.component';
import { ButtonComponent } from './button/button.component';
import { CreateNewCategoryComponent } from './create-new-category/create-new-category.component';
import { CuentasComponent } from './cuentas/cuentas.component';
import { IngresosComponent } from './ingresos/ingresos.component';
import { SideBarComponent } from '../side-bar/side-bar.component';
import { TransactionsComponent } from './transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent, LoginComponent, RegisterComponent, AddNewCategoriesComponent, LayoutCategoriesComponent, ButtonComponent, CreateNewCategoryComponent, CuentasComponent, IngresosComponent, SideBarComponent, TransactionsComponent, 
  ],
  imports: [
    FormsModule ,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
