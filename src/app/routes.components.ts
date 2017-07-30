import {Component} from "@angular/core";
import {Product} from "./models/product.model";
import {ProductService} from "./services/product.service";

@Component({
  template:"<h3>Welcome to My Shopping App</h3>"
})
export class HomeComponent {}

@Component({
  template: `<div class="col-sm-6">
    <product-list></product-list>
  </div>
  <div class="col-sm-6 well">
    <cart-items></cart-items>
  </div>`
})
export class ListComponent {}

@Component({
  template: "<h1 class='well'>404. Ooooooops!!! Not Found</h1>"
})
export class NotFoundComponent { }

@Component({
  templateUrl:"./manage.component.html"
})
export class ManageComponent {
  mcProducts:Product[] = [];

  constructor(private ps:ProductService) {
    this.mcProducts = ps.getProducts();
  }
}

