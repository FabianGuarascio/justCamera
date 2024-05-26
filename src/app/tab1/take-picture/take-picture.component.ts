import { Component, inject } from '@angular/core';
import { CameraService } from 'src/app/camera.service';
import { IonModal, IonButton } from '@ionic/angular/standalone';
import { NgStyle } from '@angular/common';
@Component({
  selector: 'app-take-picture',
  templateUrl: './take-picture.component.html',
  styleUrls: ['./take-picture.component.scss'],
  imports:[NgStyle,IonModal,IonButton],
  standalone: true,
})
export class TakePictureComponent {
  
  
  public cameraService = inject(CameraService)
  public isOpenModal = false
  openModal(){
    this.isOpenModal = true
    this.cameraService.startCamera()

  }
  startCamera(){
    this.cameraService.startCamera()
  }
  takePicture(){
    this.cameraService.tomarFoto()
  }

  closeModal(){
    this.isOpenModal = false
  }
  modalDismised(){
    this.cameraService.stopCamera()
    this.isOpenModal = false
  }

  

}
