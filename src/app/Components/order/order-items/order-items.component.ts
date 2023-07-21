import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderItemService } from 'src/app/Services/order-item.service';
import { OrderService } from 'src/app/Services/order.service';
import { OrderItem } from 'src/app/_Models/oder-item-model';
import { Order } from 'src/app/_Models/order-model'
@Component({
  selector: 'app-order-items',
  templateUrl: './order-items.component.html',
  styleUrls: ['./order-items.component.scss']
})

export class OrderItemsComponent implements  OnInit{
  order :any={};
  orderitems : OrderItem[] = [];
  orderid :number = 0;

  constructor
  (
    private orderService : OrderService,
    private route : ActivatedRoute,
    private orderItemService : OrderItemService
  ){}
  ngOnInit(): void {
    this.route.params.subscribe((next:any)=>{
      this.orderid = next.id;
      this.getOrder();
      this.getItemsByOrderId();
    })
  }

  getOrder(){
    this.orderService.getById(this.orderid).subscribe((next:any)=>{
      this.order = next.data;
    });
  }


  getItemsByOrderId(){
    this.orderItemService.getByOrderId(this.orderid).subscribe((next : any)=>{
      this.orderitems = next.data;
    })
  }

}
