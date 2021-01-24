import { Component, EventEmitter, Output } from '@angular/core';
import { Service } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [Service]
})

export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();
  
  constructor(private log : Service){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    });
    this.log.array.push(this.log.array.length)
    this.log.print()
  }
}
