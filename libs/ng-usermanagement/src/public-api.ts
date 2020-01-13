/*
 * Public API Surface of ng-usermanagement
 */

export * from './lib/login/providers/login-email-password/login-email-password.component';
export * from './lib/login/providers/login-google/login-google.component';
export * from './lib/login/login-providers.module';
export * from './lib/register/register.component';
export * from './lib/register/register.module';
export * from './lib/spinner/spinner.component';
export * from './lib/spinner/spinner.module';
export * from './lib/validation-message/validation-message.component';
export * from './lib/validation-message/validation-message.module';

export * from './lib/settings/user/user.settings.Component'
export * from './lib/settings/admin/admin.settings.Component'
// Services
export * from './lib/services/auth.service';
export * from './lib/services/admin.auth.service';
export * from './lib/services/user.service';
export * from './lib/guards/admin-auth-guard.service';

export * from './lib/ng-user-management.module';
