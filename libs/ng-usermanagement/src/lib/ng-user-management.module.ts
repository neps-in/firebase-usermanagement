import { ModuleWithProviders, NgModule, TypeDecorator } from '@angular/core';
import { FirebaseNameOrConfigToken, FirebaseOptionsToken } from '@angular/fire';
import { ngUserManagementConfig, ngUserManagementConfigFactory, NgUserManagementConfigToken, UserProvidedConfigToken } from './interfaces/firebase-config.interface';

import { LoginProvidersModule } from './login/login-providers.module';
import { RegisterModule } from './register/register.module';
import { SpinnerModule } from './spinner/spinner.module';
import { LoginRegisterModule } from './templates/login-register.module';
import { inputValidation, InputValidationToken, UserProvidedValidationToken, ngInputValidationFactory} from './interfaces/input-validation.interface'
import { UserAdminSettingsModule } from './settings/user.admin.settings.module';
import { AdminAuthGuardService } from './guards/admin-auth-guard.service';

@NgModule({
  declarations: [
  ],
  imports: [],
  exports: [
    LoginProvidersModule,
    RegisterModule,
    SpinnerModule,
    LoginRegisterModule,
    UserAdminSettingsModule,
  ],
  providers: [
    AdminAuthGuardService
  ]
})
export class NgUserManagementModule { 
  static forRoot(
    //configFactory: FirebaseAppConfig,
    config: ngUserManagementConfig = {},
    inputValidationConfig?: inputValidation,
    appNameFactory?: () => string
  ): ModuleWithProviders<any> {
    return {
      ngModule: NgUserManagementModule,
      providers:
        [
          {
            provide: FirebaseOptionsToken,
            useValue: config.firebaseConfig
          },
          {
            provide: FirebaseNameOrConfigToken,
            useFactory: appNameFactory
          },
          {provide: UserProvidedConfigToken, useValue: config},
          {
            provide: NgUserManagementConfigToken,
            useFactory: ngUserManagementConfigFactory,
            deps: [UserProvidedConfigToken]
          },
          {provide: UserProvidedValidationToken, useValue: inputValidationConfig},
          {
            provide: InputValidationToken,
            useFactory: ngInputValidationFactory,
            deps: [UserProvidedValidationToken]
          }

        ]
    };
  }
}