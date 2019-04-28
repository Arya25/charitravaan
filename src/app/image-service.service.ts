import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-type' : 'application/text', 'Access-Control-Allow-Origin': '*'})
};

@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  constructor(private http: HttpClient) { }

  getPathHomePage() {
    return this.http.get('http://localhost:8080/WSDemo/imagepath/homepage', {responseType: 'text'});
  }

  getPathLogo() {
    return this.http.get('http://localhost:8080/WSDemo/imagepath/logo', {responseType: 'text'});
  }

  getPaytmLogo() {
    return this.http.get('http://localhost:8080/WSDemo/imagepath/paytm', {responseType: 'text'});
  }

  getNetbankingLogo() {
    return this.http.get('http://localhost:8080/WSDemo/imagepath/netbanking', {responseType: 'text'});
  }

  getUpiLogo() {
    return this.http.get('http://localhost:8080/WSDemo/imagepath/upi', {responseType: 'text'});
  }
}
