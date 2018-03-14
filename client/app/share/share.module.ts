import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {HhttpProvider} from "../../h4mit/http/Hhttp";
import {InternationalizationModule} from "../../h4mit/internationalization/internationalization.module";
/**
 * Created by h4mit on 26/08/2017.
 */

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    HhttpProvider,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    InternationalizationModule,
  ]
})
export class ShareModule {
}
