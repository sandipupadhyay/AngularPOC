import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather/weather.service';
import { State } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { ViewEncapsulation } from '@angular/core';
import { PageChangeEvent } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
	styleUrls: ['./forecast.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class ForecastComponent implements OnInit {

	city : string;
	//showWeather : any = [];
	errorCode : any;
	showForcast : any = [];
	forecastList : any;
	count : any = 0;
  constructor(private _weatherService : WeatherService) { };
	public gridData: any = [];
	public pageSize = 10;
	public skip = 0;
  ngOnInit() {
  }

  forcast() {
  	this._weatherService.forcastWeather(this.city)
			.subscribe(response => 
				{
			// 	<GridDataResult>{
			// 		data: response['value']
			// }
				//this.showForcast.push(response);
				this.gridData.push(response);
				console.log(response);
  			this.forecastList = response.list;
  			this.errorCode = false;
  		},
  		error => {
  		})
	}
	public pageChange(event: PageChangeEvent): void {
		this.skip = event.skip;
		//this.loadItems();
}

}
