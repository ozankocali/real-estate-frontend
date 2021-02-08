import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    private adService:AdService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
  
    this.adService.getAdById(this.id).subscribe(data=>{
      this.ad=data;
    })
  }

}
