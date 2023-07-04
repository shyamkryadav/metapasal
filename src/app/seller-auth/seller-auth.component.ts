import { Component } from '@angular/core';
import { SellService } from '../services/sell.service';

@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent {

  constructor(private seller:SellService){} 
  ngOnInit(): void{}

  signUp(data:object):void{
     this.seller.userSignUp(data).subscribe((result: any)=>{
        // console.log(result)
     });
  }
}
