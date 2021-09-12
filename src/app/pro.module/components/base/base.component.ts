import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  title = 'BurkhalterCV';

  constructor() { }

  ngOnInit(): void {
  }

}
