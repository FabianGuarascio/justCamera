import { Injectable, inject } from '@angular/core';
import { CameraPreview,CameraPreviewOptions,CameraPreviewPictureOptions } from '@capacitor-community/camera-preview';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  private platform = inject(Platform)

  public serviceString = "hila"
  public base64 = ''
  public images:string[] = []
  private _verticalPadding = 250
  private _horizontalPadding = 100
  public width = this.platform.width() - this._horizontalPadding
  public height = this.platform.height() - this._verticalPadding
  private cameraPreviewOptions: CameraPreviewOptions = {
    position: 'rear',
    height: this.height,
    width: this.width,
    disableAudio:true,
    x: (this._horizontalPadding /2),
    y: (this._verticalPadding /2),
  };


  startCamera(){
    CameraPreview.start(this.cameraPreviewOptions);
  }
  async tomarFoto(){
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 50
    };
    const result = await CameraPreview.capture(cameraPreviewPictureOptions);
    const base64PictureData = result.value;
    this.base64 = base64PictureData
    this.images.push(`data:image/png;base64, ${base64PictureData}`) 
  }
  stopCamera(){
    CameraPreview.stop();
  }
}
