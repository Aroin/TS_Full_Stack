import {Routes, RouterModule} from "@angular/router";
import {PanelDashboard} from "./dashboard";

const routes: Routes = [
  {
    path: '',
    component: PanelDashboard
  }
];

export const PanelDashboardRouting = RouterModule.forChild(routes);
