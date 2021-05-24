import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ad } from '../ad';
import {AdService} from '../ad.service'
@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {

  id:number;
  ad:Ad=new Ad();

  constructor(private route:ActivatedRoute,
    private adService:AdService,
    private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  
    this.adService.getAdById(this.id).subscribe(data=>{
      this.ad=data;
    })
  }

  updateAd(id:number){
    this.router.navigate(["update-ad",id])
  }

  deleteAd(id:number){
    this.adService.deleteAd(id).subscribe(data=>{
      
    })
    this.router.navigate(['/ads'])
  }

}
