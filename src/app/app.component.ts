import { Component } from '@angular/core';
import { VideoDetail } from './video-details.model';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
    safeURL:any;
  results: VideoDetail[];
  loading: boolean;
  message = '';
  videoURL="https://www.youtube.com/embed/1KT2asqA1J8";
  constructor( private _sanitizer: DomSanitizer){
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
 }
  updateResults(results: VideoDetail[]): void {
    this.results = results;
    if (this.results.length === 0) {
      this.message = 'Not found...';
    } else {
      this.message = 'Top 10 results:';
    }
  }
}
