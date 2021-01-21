import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }
  serverName: string = "";
  servers: Array<String> = ["Testserver", "Testserver 2"];

  onCreateServer(){
    if (!this.serverName) return 
    this.servers.push(this.serverName);
    this.serverName = "";

  }

  ngOnInit(): void {
  }

}
