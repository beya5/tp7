import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  private readonly productService:ProductService= inject(ProductService);
  products:Product[]=[];
  lesproduits$!:Observable<Product[]>;
  // affiche la liste des produits en souscrivant à l’observable getProducts
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      data=>this.products=data
    )
// pour affichage avec async pipe
    this.lesproduits$=this.productService.getProducts();
  }



  onAddProduct() {
    let p:Product = new Product(Math.round(Math.random()*100),"livre",35.6);
    this.productService.addProduct(p).subscribe(
      //data=>console.log(data)
      data=>{this.products.push(p);
        console.log('Produit ajouté:',data);
      }
    )
  }

}
