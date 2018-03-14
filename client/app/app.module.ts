import {NgModule} from "@angular/core";
import {ShareModule} from "./share/share.module";
import {routing} from "./app.routes";
import {PublicLayout} from "./public/layout/public.layout";
import {PanelLayout} from "./panel/layout/panel.layout";
import {NotFoundPage} from "./public/not-found-page/not-found-page";
import {AppComponent} from "./app";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    PublicLayout,
    PanelLayout,
    NotFoundPage,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    ShareModule,
    routing,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
