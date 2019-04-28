import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo;

  constructor(private imageService: ImageServiceService) { }

  ngOnInit() {
    this.getPathLogo();
  }

  getPathLogo() {
    this.imageService.getPathLogo().subscribe(
      data => {this.logo = data; },
      err => console.error(err),
      () => console.log('Image path retrieval done')
    );
  }

}
