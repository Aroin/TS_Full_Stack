import { LogIn } from './login/login';
import { ShareModule } from './../../share/share.module';
import { NgModule } from '@angular/core';
import { AccountingRouting } from './accounting.routing';


@NgModule({
    imports: [
      ShareModule,
      AccountingRouting
    ],
    declarations: [
        LogIn,
    ]
  })

  export class AccountingModule {}