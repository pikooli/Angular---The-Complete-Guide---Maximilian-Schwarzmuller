import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./auth-guard.service";

import { HomeComponent } from "./home/home.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { EditServerComponent } from "./servers/edit-server/edit-server.component";
import { ServerResolver } from "./servers/server/server-resolver.service";
import { ServerComponent } from "./servers/server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { UserComponent } from "./users/user/user.component";
import { UsersComponent } from "./users/users.component";

// route logic
const routes: Routes = [
  { path: "", component: HomeComponent },

  {
    path: "users",
    component: UsersComponent,
    children: [{ path: ":id/:name", component: UserComponent }],
  },
  {
    path: "servers",
    component: ServersComponent,
    // this is where you put the logic that will check if you can navigate here or not. canActive let you navigate if it true.
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: ":id",
        component: ServerComponent,
        resolve: { server: ServerResolver },
      },
      {
        path: ":id/edit",
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGuard],
      },
    ],
  },
  {
    path: "not-found",
    component: NotFoundComponent,
    data: { message: "test" },
  },
  { path: "**", redirectTo: "/not-found" },
];

@NgModule({
  imports: [
    // in case of browser or server that will recharge the page when routing
    RouterModule.forRoot(routes, { useHash: true }),
    // [RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
