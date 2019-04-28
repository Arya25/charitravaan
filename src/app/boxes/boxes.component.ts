import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-boxes',
  templateUrl: './boxes.component.html',
  styleUrls: ['./boxes.component.css']
})
export class BoxesComponent implements OnInit {

  public paytm;
  public netbanking;
  public upi;

  constructor(private imageService: ImageServiceService) { }

  ngOnInit() {
    this.getPaytmLogo();
    this.getNetbankingLogo();
    this.getUpiLogo();
  }

  getPaytmLogo() {
    this.imageService.getPaytmLogo().subscribe(
      data => {this.paytm = data; },
      err => console.error(err),
      () => console.log('Image path retrieval done')
    );
  }
  getNetbankingLogo() {
    this.imageService.getNetbankingLogo().subscribe(
      data => {this.netbanking = data; },
      err => console.error(err),
      () => console.log('Image path retrieval done')
    );
  }
  getUpiLogo() {
    this.imageService.getUpiLogo().subscribe(
      data => {this.upi = data; },
      err => console.error(err),
      () => console.log('Image path retrieval done')
    );
  }

}
