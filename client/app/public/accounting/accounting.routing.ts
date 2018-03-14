import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { LogIn } from "./login/login";

const routes: Routes = [
    {
      path: 'log-in',
      component: LogIn
    }
  ];

export const AccountingRouting = RouterModule.forChild(routes);
