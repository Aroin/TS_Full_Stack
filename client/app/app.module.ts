import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HhttpProvider } from './../h4mit/http/Hhttp';
import { AppConfig, ConfigProvider } from './app.config';
import {NgModule, APP_INITIALIZER} from '@angular/core';
import {ShareModule} from './share/share.module';
import {routing} from './app.routes';
import {PublicLayout} from './public/layout/public.layout';
import {PanelLayout} from './panel/layout/panel.layout';
import {NotFoundPage} from './public/not-found-page/not-found-page';
import {AppComponent} from './app';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    PublicLayout,
    PanelLayout,
    NotFoundPage,
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ShareModule,
    routing,
  ],
  providers: [
    HhttpProvider,
    AppConfig,
    {
      deps: [AppConfig],
      multi: true,
      provide: APP_INITIALIZER,
      useFactory: ConfigProvider
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
