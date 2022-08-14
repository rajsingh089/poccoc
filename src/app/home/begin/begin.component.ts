import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { Camera, CameraResultType } from '@capacitor/camera';
import { environment } from 'src/environments/environment';
//This is required
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
@Component({
  selector: 'app-begin',
  templateUrl: './begin.component.html',
  styleUrls: ['./begin.component.scss']
})
export class BeginComponent implements OnInit {
  newMap?: GoogleMap;
  imageSrc = 'assets/images/mapimage.png'  
  imageAlt = 'map'
  captureImage: any;
  @ViewChild('map')
  mapRef?: ElementRef<HTMLElement>;

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  base64Image: string | undefined;

  //Constructor Required
  constructor(private router: Router){
  }

  async createMap() {
    const x = this.mapRef?.nativeElement;
    alert( x?.tagName)
    if (x) {
      this.newMap = await GoogleMap.create({
        id: 'my-cool-map',
        element: x,
        apiKey: environment.apiKey,
        config: {
          center: {
            lat: this.lat,
            lng: this.lng,
          },
          zoom: 4,
        },
      }, (v)=> {
        alert(v.mapId)
      }
      );
    }
    
  }

  ngOnInit(): void {
    
  }

  // const takePicture = async () => {
  //   const image = await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: true,
  //     resultType: CameraResultType.Uri
  //   });
  
  //   // image.webPath will contain a path that can be set as an image src.
  //   // You can access the original file using image.path, which can be
  //   // passed to the Filesystem API to read the raw data of the image,
  //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
  //   var imageUrl = image.webPath;
  
  //   // Can be set to the src of an image now
  //   imageElement.src = imageUrl;
  // };


  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      resultType: CameraResultType.DataUrl
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.dataUrl;
    this.captureImage = imageUrl;
    // Can be set to the src of an image now
    // imageElement.src = imageUrl;
  }
  
  onNext() {
    
    this.router.navigate(['/app-begin/app-details']);
  }

  onBack() {
    this.router.navigate(['/app-home'])

  }
}
