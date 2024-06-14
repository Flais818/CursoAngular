
import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderComponent } from './pages/order/order.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsComponent } from './products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { CanFlyPipe } from './pipes/can-fly.pipe';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    ProductsComponent,
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderComponent,

    //Pipes
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule
  ]
})
export class ProductsModule { }
