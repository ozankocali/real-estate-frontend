import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ad } from '../ad';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-create-ad',
  templateUrl: './create-ad.component.html',
  styleUrls: ['./create-ad.component.css']
})
export class CreateAdComponent implements OnInit {

  ad:Ad=new Ad();

  constructor(private adService:AdService,
    private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.saveAd();
  }

  saveAd(){
    this.adService.createAd(this.ad).subscribe(data=>{
      console.log(data);
      this.goToAdList();
    },
    error=>console.log(error));
  }

  goToAdList(){
    this.router.navigate(['/ads']);
  }

}
