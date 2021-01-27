import { Component, Injectable, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
@Injectable()
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onLoadServer() {
    this.router.navigate(["servers"], {
      queryParams: { allow: true, test: "toto" },
      fragment: "test",
    });
  }
  logIn() {
    this.authService.login();
  }
  logOut() {
    this.authService.logout();
  }
}
