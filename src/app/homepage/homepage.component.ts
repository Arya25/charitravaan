import { Component, OnInit } from '@angular/core';
import { ImageServiceService } from '../image-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public homepageImage;
  vav = 'Vision & Values';

  constructor(private imageService: ImageServiceService) { }


  ngOnInit() {
    this.getPathHomePage();
  }

  getPathHomePage() {
    this.imageService.getPathHomePage().subscribe(
      data => {this.homepageImage = data; },
      err => console.error(err),
      () => console.log('Image path retrieval done')
    );
  }
}
