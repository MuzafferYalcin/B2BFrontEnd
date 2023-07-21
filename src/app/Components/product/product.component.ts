import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from 'src/app/_Models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  products : Product[] = [];
  product: Product= new Product();
  constructor(private productService : ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.productService.getList().subscribe((products : any) =>{
      this.products = products.data;
    })
  }

  addProduct(form : NgForm){
    let product : Product =new  Product();
    product.name = form.value.name;
    product.price = form.value.price;
    this.productService.add(product).subscribe((next:any)=>{
      this.getProducts();
      var btn =document.getElementById("addproductFormClose");
      if(btn) btn.click();
    });
  }

  getProduct(product  : any){
    this.productService.getById(product.id).subscribe((next : any)=>{
      this.product = next.data;
    })
  }

  updateProduct(){
    this.productService.update(this.product).subscribe((next:any)=>{
      this.getProducts();
      let btn = document.getElementById("updateformclose");
      if(btn) btn.click();

      alert(next.message);
    })
  }

  deleteProduct(product : Product){
    this.productService.delete(product).subscribe((next:any)=>{
      this.getProducts();
      alert(next.message);
    })
  }
}
