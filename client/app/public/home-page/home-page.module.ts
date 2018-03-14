/**
 * Created by h4mit on 26/08/2017.
 */
import {NgModule} from "@angular/core";
import {ShareModule} from "../../share/share.module";
import {HomePage} from "./home-page";
import {HomePageRouting} from "./home-page.routing";

@NgModule({
  imports: [
    ShareModule,
    HomePageRouting,
  ],
  declarations: [
    HomePage,
  ]
})

export class HomePageModule {}
