import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SMSMisrServiceService {

  constructor(private httpClient: HttpClient) { }
  httpHeader = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Accept': '*/*'
    })
  };

  
  SendSMS(SMSobj:any): Observable <any>{
    return this.httpClient.post<any> (`${environment.SendSMSURL}`,SMSobj,this.httpHeader) ;
   
}
}