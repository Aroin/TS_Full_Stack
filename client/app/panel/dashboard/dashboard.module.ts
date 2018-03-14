/**
 * Created by h4mit on 26/08/2017.
 */
import {NgModule} from "@angular/core";
import {ShareModule} from "../../share/share.module";
import {PanelDashboardRouting} from "./dashboard.routing";
import {PanelDashboard} from "./dashboard";

@NgModule({
  imports: [
    ShareModule,
    PanelDashboardRouting,
  ],
  declarations: [
    PanelDashboard,
  ]
})

export class PanelDashboardModule {}
