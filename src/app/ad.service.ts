import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ad } from './ad';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private baseUrl="http://localhost:8090/api/v1/properties";

  constructor(private httpClient:HttpClient) {}
    getAdsList():Observable<Ad[]>{
      return this.httpClient.get<Ad[]>(`${this.baseUrl}`);
    }

    createAd(ad:Ad):Observable<Object>{
      return this.httpClient.post(`${this.baseUrl}`,ad);
    }

    getAdById(id:number):Observable<Ad>{
      return this.httpClient.get<Ad>(`${this.baseUrl}/${id}`);
    }

    updateAd(id:number,ad:Ad):Observable<Object>{
      return this.httpClient.put(`${this.baseUrl}/${id}`,ad)
    }
   
    deleteAd(id:number):Observable<Object>{
      return this.httpClient.delete(`${this.baseUrl}/${id}`);
    }
}
