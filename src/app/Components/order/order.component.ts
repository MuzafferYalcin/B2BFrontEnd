import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/Services/order.service';

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
}
