import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/_Models/customer-model';
import { CustomerDiscount } from 'src/app/_Models/customerDiscount';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent {
  customers : Customer[] = [];
  filterText ="";
  customerDiscount : CustomerDiscount = new CustomerDiscount();
  customer : Customer = new Customer();

  constructor(private customerService : CustomerService){}
  ngOnInit(): void {
    this.getCustomers();
  }


  getCustomers(){
    this.customerService.getListWithDiscount().subscribe((customers : any) =>{
      this.customers = customers.data;
    })
  }


  getCustomer(id: number){
    this.customerService.get(id).subscribe((c:any)=>{
      this.customer = c.data;
      this.customerService.GetByCustomerId(c.data.id).subscribe((next:any)=>{
        this.customerDiscount= next.data;
      })
    })
  }


  add(form : NgForm){
    let customer : Customer = new Customer();
    customer.name = form.value.name;
    customer.email = form.value.email;
    customer.password = form.value.password;
    this.customerService.add(customer).subscribe((next:any)=>{
      form.reset();
      this.getCustomers();
    })
  }


  update(){
    this.customerService.update(this.customer).subscribe((next:any)=>{
      this.getCustomers();
      var btn = document.getElementById("updateModelCloseBtn")
      if(btn)
        btn.click();
    })
  }


  addDiscount(form : NgForm){
    let customerdiscount : CustomerDiscount = new CustomerDiscount();
    customerdiscount.customerId = this.customer.id;
    customerdiscount.discount = form.value.discount;
    if(customerdiscount.discount! <=0 || customerdiscount.discount! > 100)
    {
      alert("İNDİRİM ORANI 0-100 ARASINDA OLMALIDIR ! ");
      form.reset()
    }
    else{
      this.customerService.addDiscount(customerdiscount).subscribe((next:any)=>{
        this.getCustomers();
        var btn = document.getElementById("updateRelationshipModelCloseBtn");
        if(btn) btn.click();
      })
    }
  }


  updateDiscount(form: NgForm){
      let customerDiscount: CustomerDiscount = new CustomerDiscount();
      customerDiscount.id = this.customerDiscount.id;
      customerDiscount.customerId = this.customer.id;
      customerDiscount.discount = form.value.updatediscount;
      if(customerDiscount.discount! <=0 || customerDiscount.discount! > 100)
      {
        alert("İNDİRİM ORANI 0-100 ARASINDA OLMALIDIR !");
        form.reset()
      }
      else{
        this.customerService.updateDiscount(customerDiscount).subscribe(next=>{
        this.getCustomers();
        form.reset();
        var btn = document.getElementById("updateCustomerDiscountModelCloseBtn");
        if(btn) btn.click();
      })
      }
  }

  delete(id : number){
    this.customerService.delete(id).subscribe((next : any)=>{
      alert("başarıyla silindi");
      this.getCustomers();
    },err=>{
      console.log(err.error);
    })
  }

}
