import {Component} from "@angular/core";
import {CartItem} from "../models/cartitem.model";
import {CartService} from "../services/cart.service";

@Component({
  selector: "cart-items",
  templateUrl: './cart-items.component.html'
})
export class CartItemsComponent {
  cartItems:CartItem[] = [];

  constructor(private cs:CartService) {
    //let cs:CartService = new CartService();
    this.cartItems = cs.getCartItems();
  }

  cancelItem(idx){
    this.cs.deleteItem(idx);
  }

  totalAmount(){
    let tot = 0;
    for(let item of this.cartItems){
      tot += (item.price * item.qty);
    }
    return tot;
  }
}
