import {Routes, RouterModule} from "@angular/router";
import {PanelLayout} from "./panel/layout/panel.layout";
import {PANEL_ROUTES} from "./panel/panel.routes";
import {PUBLIC_ROUTES} from "./public/public.routes";
import {NotFoundPage} from "./public/not-found-page/not-found-page";
import {ModuleWithProviders} from "@angular/core";
import {PublicLayout} from "./public/layout/public.layout";
/**
 * Created by h4mit on 26/08/2017.
 */

const routes: Routes = [
  {
    path: '',
    component: PublicLayout,
    children: PUBLIC_ROUTES
  },
  {
    path: 'panel',
    component: PanelLayout,
    children: PANEL_ROUTES
  },
  { path: '**', component: NotFoundPage }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
