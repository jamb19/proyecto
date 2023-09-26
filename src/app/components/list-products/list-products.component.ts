import { Component } from '@angular/core';
import { Product } from 'src/app/interfaces/produc';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {
  listProducts: Product[] = [
    { id: 1, name: 'Mole negro', description: 'Mole negro con pollo', price: 180 },
    { id: 2, name: 'Mole verde', description: 'Mole verde con champiñones', price: 150 }
  ]
}
