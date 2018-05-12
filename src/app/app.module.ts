import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import { ForecastComponent } from './forecast/forecast.component';

import { WeatherService } from './weather/weather.service';

const appRoutes: Routes = [
  { path: 'current-weather', component: WeatherComponent },
  { path: 'forecast',      component: ForecastComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    ForecastComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    GridModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    RouterModule.forRoot(appRoutes,{ enableTracing: true })
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
