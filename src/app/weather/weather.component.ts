import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

	city : string;
	showWeather : any = [];
	errorCode : any;
	showForcast : any = [];
	forecastList : any;
  count : any = 0;
  constructor(private _weatherService : WeatherService) { };

  ngOnInit() {
  }

  
  getWeather(){
    console.log(this.city);
  	this._weatherService.getWeather(this.city)
  		.subscribe(response => 	{
  			this.showWeather.push(response);
  			this.errorCode = false;
  		},
  		error => {
          this.errorCode = error.statusText; 
  		});
  }

  forcast() {
  	this._weatherService.forcastWeather(this.city)
  		.subscribe(response => {
  			this.showForcast.push(response);
  			this.forecastList = response.list;
  			this.errorCode = false;
  		},
  		error => {
  		})
  }

}
