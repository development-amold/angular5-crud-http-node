import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = "Angular5-Node-MongoDB";
  constructor(private titleService: Title) { this.titleService.setTitle(this.title) }

  ngOnInit() {
  }


}
