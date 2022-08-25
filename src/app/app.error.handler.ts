import { HttpErrorResponse } from "@angular/common/http";
import { ErrorHandler, Injectable, Injector, NgZone } from "@angular/core";
import { LoginService } from "./security/login/login.service";
import { NotificationService } from "./shared/messages/notification.service";

@Injectable()
export class ApplicationErrorHandler extends ErrorHandler {
  constructor(
    private notificationService: NotificationService,
    private injector: Injector,
    private zone: NgZone
  ) {
    super();
  }

  override handleError(error: HttpErrorResponse | any): void {
    if (error instanceof HttpErrorResponse) {
      const message = error.error.message;
      this.zone.run(
        () => {
          switch(error.status) {
            case 401:
              this.injector.get(LoginService).handleLogin();
              break;
            case 403:
              this.notificationService.notify(message || 'Not Authorized!');
              break;
            case 404:
              this.notificationService.notify(message || 'Resource not found!');
              break;
          }
        }
      );
    }
    super.handleError(error);
  }
}