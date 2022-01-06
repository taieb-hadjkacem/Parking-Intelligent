import { Component , ViewChild } from '@angular/core';
import { StorageService } from './../services/storage.service';
import { AuthConstants } from '../../config/auth-constants';
import { AuthService } from './../services/auth.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  availablePlace: any;
  colorArray: any;
  sensordata : any;
payload;
profiledata;
  constructor(
private storageService: StorageService,
private authService : AuthService
  ) {}
  ngOnInit() {
    this.storageService.get(AuthConstants.AUTH).then(data => {
      this.payload = data;
      this.authService.getUserByUsername(data['sub']).subscribe(
        (res: any) => {
          this.profiledata = res[0]
        }
      );
      this.authService.getsensorData().then(data => {
        this.sensordata = data;
      });
    });

  }
  logout(){
    this.authService.logout();
  }
  doRefresh(event) {
    this.createBarChart();
    this.storageService.get(AuthConstants.AUTH).then(data => {
      this.payload = data;
      this.authService.getUserByUsername(data['sub']).subscribe(
        (res: any) => {
          this.profiledata = res[0]
        }
      );

    });
    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }
  ionViewDidEnter() {
    this.createBarChart();
  }
  createBarChart() {

      this.authService.getsensorData().then(data => {
        this.sensordata = data;
        let lastOne = this.sensordata;
        let payloadResult = lastOne["payload"];
        this.availablePlace = (payloadResult === "1");
      });
      console.log(this.availablePlace);
  return true;
  }
   delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
