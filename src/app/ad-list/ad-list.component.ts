import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Ad} from '../ad';
import {AdService} from '../ad.service';
@Component({
  selector: 'app-ad-list',
  templateUrl: './ad-list.component.html',
  styleUrls: ['./ad-list.component.css']
})
export class AdListComponent implements OnInit {

  ads:Ad[];

  constructor(private adService:AdService,
    private router:Router) { }

  ngOnInit(): void {
    
    this.getAds();

  }

  private getAds(){
    this.adService.getAdsList().subscribe(data=>{
      this.ads=data;
    })
  }

  updateAd(id:number){
    this.router.navigate(["update-ad",id])
  }

  deleteAd(id:number){
    this.adService.deleteAd(id).subscribe(data=>{
      this.getAds();
    })
  }

  adDetails(id:number){
    this.router.navigate(["ad-details",id]);
  }

}
