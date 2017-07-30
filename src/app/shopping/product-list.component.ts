import {Component} from "@angular/core";
import {Product} from "../models/product.model";
import {ProductService} from "../services/product.service";
import {CartService} from "../services/cart.service";
import {CartItem} from "../models/cartitem.model";

@Component({
  selector: "product-list",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  products:Product[] = [];

  constructor(private cSvc:CartService, private ps:ProductService){
    //let ps:ProductService = new ProductService();
    this.products = ps.getProducts();
  }

  addToCart(selectedProduct:Product) {
    let orderedItem:CartItem = new CartItem(selectedProduct.name, selectedProduct.price, 1);
    this.cSvc.addItem(orderedItem)
  }
}
