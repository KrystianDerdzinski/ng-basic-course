import { Component, OnInit } from '@angular/core';

type User = {
  name: string;
  imageUrl: string;
  age?: number;
  lastLogin?: Date;
};

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  users: User[] = [];

  ngOnInit(): void {
    this.users = [
      {
        name: 'Janusz',
        imageUrl: 'https://randomuser.me/api/portraits/men/14.jpg',
        age: 23,
        lastLogin: new Date()
      },
      {
        name: 'Andrzej',
        imageUrl: 'https://randomuser.me/api/portraits/men/22.jpg'
      },
      {
        name: 'Tajemniczy wielbiciel',
        imageUrl: 'https://randomuser.me/api/portraits/women/33.jpg'
      },
      {
        name: 'Andrzej Senior',
        imageUrl: 'https://randomuser.me/api/portraits/women/44.jpg'
      },
    ]
  }

}