/**
 * Created by h4mit on 27/08/2017.
 */
import {NgModule} from "@angular/core";
import {TranslateModule, TranslateLoader, TranslateService} from "@ngx-translate/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";

// AoT requires an exported function for factories
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, '../assets/i18n/', '.json');
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  exports: [
    TranslateModule
  ]
})

export class InternationalizationModule {
  constructor(private translate: TranslateService) {
    translate.addLangs(["en", "fa"]);
    translate.setDefaultLang('fa');
  }
}
