import { Component, OnInit, Input } from '@angular/core';
import { VideoDetail } from '../video-details.model';
import { MatDialog } from '@angular/material';
import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {
  @Input() result: VideoDetail;
  constructor(public dialog: MatDialog,) { }

  ngOnInit() {
  }
  openVideo(){
    console.log(this.result.videoUrl)
    console.log("clicked");
    const dialogRef = this.dialog.open(VideoComponent, {
      width: "550px",
      data: { video: this.result }
    });
    dialogRef.afterClosed().subscribe(data => {
      console.log("Login closed");
      console.log(data);
    });

  }

}
