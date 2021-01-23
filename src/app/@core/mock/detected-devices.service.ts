import { of as observableOf,  Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Contacts, RecentUsers, UserData } from '../data/devices';

@Injectable()
export class UserService extends UserData {

  private time: Date = new Date;

  private users = {
   // nick: { name: 'ITB', picture: 'assets/images/nic.png' },//assets/images/nick.png
    eva: { name: '48-0B-8F-53-01-34', picture: 'assets/images/ev.png' },
    jack: { name: '01-6D-F1-C3-86-FC', picture: 'assets/images/jac.png' },
    lee: { name: '64-82-1D-BA-3A-3B', picture: 'assets/images/le.png' },
    alan: { name: '26-E1-F4-C3-D4-7F', picture: 'assets/images/ala.png' },
    kate: { name: 'BC-07-6A-45-0F-C4', picture: 'assets/images/kat.png' },
  };
  private types = {
    mobile: 'phone',
    home: 'unknown',
    work: 'car',
  };
  private contacts: Contacts[] = [
   // { user: this.users.nick, type: this.types.mobile },
    { user: this.users.eva, type: this.types.home },
    { user: this.users.jack, type: this.types.mobile },
    { user: this.users.lee, type: this.types.mobile },
    { user: this.users.alan, type: this.types.home },
    { user: this.users.kate, type: this.types.work },
  ];
  private recentUsers: RecentUsers[]  = [
    { user: this.users.alan, type: this.types.home, time: this.time.setHours(21, 12)},
    { user: this.users.eva, type: this.types.home, time: this.time.setHours(17, 45)},
   // { user: this.users.nick, type: this.types.mobile, time: this.time.setHours(5, 29)},
    { user: this.users.lee, type: this.types.mobile, time: this.time.setHours(11, 24)},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(10, 45)},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 42)},
    { user: this.users.kate, type: this.types.work, time: this.time.setHours(9, 31)},
    { user: this.users.jack, type: this.types.mobile, time: this.time.setHours(8, 0)},
  ];

  getUsers(): Observable<any> {
    return observableOf(this.users);
  }

  getContacts(): Observable<Contacts[]> {
    return observableOf(this.contacts);
  }

  getRecentUsers(): Observable<RecentUsers[]> {
    return observableOf(this.recentUsers);
  }
}
