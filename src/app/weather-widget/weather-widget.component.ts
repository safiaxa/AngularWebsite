import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent implements OnInit {
  apiKey = '8008f05bc800946f61d46e4515bc94c6';
  city = 'Waterloo';
  temperature: number;
  weatherCondition: string;
  weatherIcon: string;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`;

    this.http.get(apiUrl).subscribe((data: any) => {
      this.temperature = this.convertKelvinToCelsius(data.main.temp);
      this.weatherCondition = data.weather[0].main;
      this.weatherIcon = this.mapWeatherToIcon(this.weatherCondition);
    });
  }

  convertKelvinToCelsius(kelvin: number): number {
    return kelvin - 273.15; // Convert Kelvin to Celsius
  }

  mapWeatherToIcon(weatherCondition: string): string {
    switch (weatherCondition) {
      case 'Clear':
        return 'assets/sun-icon.png';
      case 'Clouds':
        return 'assets/clouds.png';
      case 'Rain':
        return 'assets/rain-clipart.svg';
      case 'Snow':
        return 'assets/snowflake.svg';
      case 'Drizzle':
        return 'assets/rain-clipart.svg';
      case 'Thunderstorm':
        return 'assets/rain-clipart.svg';
      // Add more conditions as needed
      default:
        return 'assets/wind-icon.png'; // Default icon
    }
  }
}
