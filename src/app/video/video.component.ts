import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {
safeURL:any;
embed:any;
embed2:any;
str1="https://www.youtube.com/embed/";
str2="/";
url:SafeResourceUrl;
  constructor( private _sanitizer: DomSanitizer,public dialogRef: MatDialogRef<VideoComponent>,
    @Inject(MAT_DIALOG_DATA) public video: any) {
   
     }

  ngOnInit() {
    this.getId();
   

console.log(this.video.video.videoUrl);

  }
  getId(){
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = this.video.video.videoUrl.match(regExp);

    if (match && match[2].length == 11) {
        this.embed= match[2];
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.video.video.videoUrl);
        console.log(this.embed);
        this.embed2=this.str1+this.embed+this.str2;
        console.log(this.embed2);
        this.url=this._sanitizer.bypassSecurityTrustResourceUrl(this.embed2);
    } else {
        return 'error';
    }

  }
}
