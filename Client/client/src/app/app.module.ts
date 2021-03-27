import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { CommonModule } from "@angular/common";

import { FormsModule } from '@angular/forms';
import { ListingComponent } from './listing/listing.component';
import { CoursesService } from './Services/courses.service';
import { ViewComponent } from './listing/view/view.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CommonModule
  ],
  declarations: [
    AppComponent,
    ListingComponent,
    ViewComponent,
   
    
  ],
  providers: [
    CoursesService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }