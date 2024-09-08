import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SellerAuthComponent } from './seller-auth/seller-auth.component';
import { SellerHomeComponent } from './seller-home/seller-home.component';
import { SellerAuthGuardGuard } from './seller-auth-guard.guard';
import { SellerAddProductComponent } from './seller-add-product/seller-add-product.component';
import { SellerUpdateProductComponent } from './seller-update-product/seller-update-product.component';
import { SearchComponent } from './search/search.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserAuthComponent } from './user-auth/user-auth.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'seller-auth', component: SellerAuthComponent },
  {
    path: 'seller-home',
    component: SellerHomeComponent,
    canActivate: [SellerAuthGuardGuard],
  },
  {
    path: 'seller-add-product',
    component: SellerAddProductComponent,
    canActivate: [SellerAuthGuardGuard],
  },
  {
    // this will tell that after / there can be some data
    path: 'seller-update-product/:id',
    component: SellerUpdateProductComponent,
    canActivate: [SellerAuthGuardGuard],
  },
  {component:SearchComponent,path:'search/:query'},
  {path:'product-detail/:productId',component:ProductDetailsComponent},
  {path:'user-auth',component:UserAuthComponent},
  {path:'cart-page',component:CartPageComponent},
  {path:'checkout',component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
