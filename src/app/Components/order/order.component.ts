import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';
import { Order } from 'src/app/_Models/order-model';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  orders : any =[];

  constructor(private orderService : OrderService){}
  ngOnInit(): void {
   this.getOrders()
  }

  getOrders(){
    this.orderService.getList().subscribe((next:any)=>{
      this.orders = next.data;
    })
  }

  update(order : Order, state : string){
    order.state = state;
    this.orderService.update(order).subscribe((next:any)=>{
      alert(next.message);
    },err=>{
      alert(err.error);
    })

  }
}
