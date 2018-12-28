import { NgModule } from '@angular/core';
import { BrowserModule} from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule
} from "@angular/material";
import { YouttubeSearchService } from './youttube-search.service';
import { SearchBoxComponent } from './search-box/search-box.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { VideoComponent } from './video/video.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonToggleModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,BrowserAnimationsModule,
  MatRippleModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatSelectModule,
  MatRadioModule,
  MatTableModule,
  MatDialogModule,HttpClientModule ],
  declarations: [ AppComponent, HelloComponent, SearchBoxComponent, SearchResultComponent, VideoComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents:[VideoComponent],
  providers: [YouttubeSearchService]
})
export class AppModule { }
