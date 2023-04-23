import { Injectable } from '@angular/core';
import { UserType } from './types/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  getAccounts(): AccountType[] {
    return [
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
