import {CartItem} from "../models/cartitem.model";
import {Injectable} from "@angular/core";

@Injectable()
export class CartService {
  private cartItemsData:CartItem[] = [];

  addItem(newItem:CartItem){
    this.cartItemsData.push(newItem);
  }

  deleteItem(idx:number) {
    this.cartItemsData.splice(idx,1);
  }

  getCartItems(){
    return this.cartItemsData;
  }
}
