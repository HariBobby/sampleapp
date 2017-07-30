import {Product} from "../models/product.model";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {
  private productsData:Product[] = [];

  constructor() {
    this.productsData  = [
      new Product(1, "Galaxy ", 3000, "Samsung Galaxy Mobile"),
      new Product(2, "Sony TV", 73000, "Sony Android TV"),
      new Product(3, "IFB Washing Machine ", 45000, "Semi Automatic Washing Machine"),
      new Product(4, "Hitachi AC", 24000, "Window AC")
    ]
  }

  getProducts(){
    return this.productsData;
  }
}
