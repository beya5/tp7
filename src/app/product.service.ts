import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';


//Déclarer une constante avant @Injectable pour définir l’url du ‘Fake API REST’ 
const API_URL="http://localhost:3000/products";

export class ProductService {

  constructor() { }
  //Injecter le service HttpClient
private readonly http:HttpClient = inject(HttpClient);
//Implémenter la méthode getProducts pour qu’elle récupère les données à partir du serveur
  public getProducts():Observable<Product[]>{
    return this.http.get<Product[]>(API_URL);
  }
  //Implémenter la méthode addProduct 
  public addProduct(p:Product):Observable<Product>{
    return this.http.post<Product>(API_URL,p);
}}
