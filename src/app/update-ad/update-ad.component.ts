import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Ad } from '../ad';
import { AdService } from '../ad.service';

@Component({
  selector: 'app-update-ad',
  templateUrl: './update-ad.component.html',
  styleUrls: ['./update-ad.component.css']
})
export class UpdateAdComponent implements OnInit {

  ad:Ad=new Ad();
  id:number;
  constructor(private adService:AdService,
    private route:ActivatedRoute,
    private router:Router) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
   this.adService.getAdById(this.id).subscribe(data=>{
     this.ad=data;
   },error=>console.log(error));
  }

  onSubmit(){
    this.adService.updateAd(this.id,this.ad).subscribe(data=>{
        this.goToAdList();
    },error=>console.log(error)
    );
  }

  goToAdList(){
    this.router.navigate(['/ads']);
  }

}
