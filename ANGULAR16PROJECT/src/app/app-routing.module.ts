import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  // { path: "login", component: LoginComponent },
  { path: "", redirectTo: "dashboard", pathMatch: "full" },
  // {
  //   path: "login",
  //   loadChildren: () => import("src/app/dashboard-module/dashboard.module").then((m) => m.DashboardModule),
  // },
  {
    // canActivate: [AuthGuard],
    path: "dashboard",
    // loadChildren: () => import("src/app/view/view.module").then((m) => m.ViewModule),
    loadChildren: () => import("src/app/dashboard-module/dashboard-module.module").then((m) => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
