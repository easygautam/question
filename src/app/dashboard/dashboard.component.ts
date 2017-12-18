import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tabs = [
    {
      "label": "Profile",
      "icon": "account_circle"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  removeTab(tab, $event){
    this.tabs.push(
      {
        "label": "Profile"+this.tabs.length+1,
        "icon": "account_circle"
      }
    );
    console.log("Clicked on tab");
  }

}
