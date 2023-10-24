import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, AfterViewInit {
  //typed animation for I am software engineer on home page
  text: string = "I am a software engineer.";
  index: number = 0;
  speed: number = 100; 
  typedText: string = ""; 

  ngOnInit(): void {
    this.typedText = "";
  }

  ngAfterViewInit() {
    this.type();
  }

  type() {
    if (this.index < this.text.length) {
      this.typedText += this.text.charAt(this.index);
      this.index++;
      setTimeout(() => this.type(), this.speed);
    }
  }
}




