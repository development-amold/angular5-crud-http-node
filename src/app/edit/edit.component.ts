import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  title = "Edit Coin"
  constructor(private titleService: Title) { this.titleService.setTitle(this.title) }

  ngOnInit() {
  }

}
