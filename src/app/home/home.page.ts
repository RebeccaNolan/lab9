import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { Geolocation } from '@capacitor/geolocation';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, FormsModule, IonButton],
})
export class HomePage implements OnInit {

  coordinates: any = "";
  lat: string = "";
  long: String = "";
  time: any = 0;

  constructor() {}

  async getGPS() {
    this.coordinates = await Geolocation.getCurrentPosition();
    this.lat = this.coordinates.coords.latitude;
    this.long = this.coordinates.coords.longitude;
    this.time = new Date(this.coordinates.timestamp);
  }

  async openBrowser(){
    await Browser.open({ url:  'http://capacitorjs.com/' })
    
  }

  ngOnInit(): void {
    
  }
}
