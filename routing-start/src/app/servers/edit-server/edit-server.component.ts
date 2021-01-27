import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { ActivatedRoute, Params, Router } from "@angular/router";

import { ServersService } from "../servers.service";
import { CanDeactivateGuard } from "./can-deactivate-guard.service";

@Component({
  selector: "app-edit-server",
  templateUrl: "./edit-server.component.html",
  styleUrls: ["./edit-server.component.css"],
})
export class EditServerComponent implements OnInit, CanDeactivateGuard {
  server: { id: number; name: string; status: string };
  serverName = "";
  serverStatus = "";
  allowEdit = false;
  changesSaved = false;

  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    let id = +this.route.snapshot.params["id"];

    this.route.params.subscribe((params) => {
      this.server = this.serversService.getServer(+params["id"]);
      this.serverName = this.server.name;
      this.serverStatus = this.server.status;
    });

    this.route.queryParams.subscribe((queryParams: Params) => {
      this.allowEdit = queryParams["allowEdit"] === "1" ? true : false;
    });
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus,
    });
    this.changesSaved = true;
    this.router.navigate(["../"], { relativeTo: this.route });
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.changesSaved) return true;
    if (
      (this.server.name !== this.serverName ||
        this.server.status !== this.serverStatus) &&
      !this.changesSaved
    ) {
      return confirm("Do you want to discard the changes ? ");
    } else {
      return true;
    }
  }
}
