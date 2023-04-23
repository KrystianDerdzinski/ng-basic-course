import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { UserType } from '../types/user-type';
import { UserService } from '../user.service';
import { AccountInterface } from '../types/account-type';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges {
  @Input() userType: UserType = null;

  users: AccountInterface[] = [];

  constructor(
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.users = this.userService.getAccounts();
  }

  ngOnChanges(): void {
    console.log('DASHBOARD: ', this.userType)
  }
}
