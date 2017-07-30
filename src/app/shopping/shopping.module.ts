import {NgModule} from "@angular/core";
import {ProductListComponent} from "./product-list.component";
import {CartItemsComponent} from "./cart-items.component";
import {CommonModule} from "@angular/common";
import {CartService} from "../services/cart.service";
import {ProductService} from "../services/product.service";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [ProductListComponent, CartItemsComponent],
  exports: [ProductListComponent, CartItemsComponent],
  imports: [CommonModule, FormsModule],
  providers: [CartService, ProductService]
})
export class ShoppingModule {}
